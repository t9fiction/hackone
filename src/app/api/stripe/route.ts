import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});


export async function POST(req: NextRequest, res: NextResponse) {
  const { cartItems } = await req.json(); // Extract cartItems from the request body

  const transformedItems = cartItems.map((item: any) => {
    console.log(item.images); // Log the value of item.images
    console.log(item.images[0]?.image.asset._ref); // Log the value of item.images[0]?.image.asset._ref
  
    return {
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          description: item.description,
          images: [item.images[0]?.image.asset._ref],
          metadata: {},
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });
  

  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://hackathon-one-tau.vercel.app';

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: transformedItems, // Use the transformedItems array
    mode: 'payment',
    success_url: `${redirectURL}/success`,
    cancel_url: `${redirectURL}/failed`,
    metadata: {
      images: cartItems.map((item: any) => item.image),
      name: 'Hackathon',
      task: 'Task Hackathon',
    },
  });

  return NextResponse.json({ sessionId: session?.id });
}
