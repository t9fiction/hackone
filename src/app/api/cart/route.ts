import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "../../../../sanity/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { equal } from "assert";

export const GET = async (request: NextRequest) => {
  // Get the current user from the working profile
  const user:string = "abd";
  try {
    const res = await db
      .select()
      .from(cartTable)
      // .where(eq(cartTable.user_id, user)); //eq takes 2 parameter, 1st one is of the database, and 2nd one is from here user and returns the values.
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const uid = uuid();

  //Saving the cookies as uid in the browser of the user
  const setCookies = cookies();
  const user_id = cookies().get("user_id");

  if (!user_id) {
    setCookies.set("user_id", uid);
  }

  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: 1,
        user_id: cookies().get("user_id")?.value as string,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
  }
};
