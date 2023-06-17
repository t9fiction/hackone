import { NextRequest, NextResponse } from "next/server";
import { cart_Items, db } from "../../../../sanity/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { equal } from "assert";
import { CartItemType } from "../../../../types/Product";

export const GET = async (request: NextRequest) => {
  // Get the current user from the working profile
  const user:string = "abd";
  try {
    const res = await db
      .select()
      .from(cart_Items)
      // .where(eq(cartTable.user_id, user)); //eq takes 2 parameter, 1st one is of the database, and 2nd one is from here user and returns the values.
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

// const uid = uuid();

//Saving the cookies as uid in the browser of the user
// const setCookies = cookies();
// const user_id = cookies().get("user_id");

// if (!user_id) {
//   setCookies.set("user_id", uid);
// }
// user_id: cookies().get("user_id")?.value as string,

export const POST = async (request: NextRequest) => {
  console.log("We are in API");
  const { cartItems } = await request.json();
  console.log(cartItems, "req at API");

  try {
    const insertPromises = cartItems.map((item: CartItemType) => {
      return db
        .insert(cart_Items)
        .values({
          _id: item._id,
          name: item.name,
          price: item.price,
          category: item.category,
          size: item.size,
          quantity: item.quantity,
        })
        .returning();
    });

    const results = await Promise.all(insertPromises);

    return NextResponse.json({ results });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};
