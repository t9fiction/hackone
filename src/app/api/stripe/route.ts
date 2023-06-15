import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});


export  async function POST(req: any, res: NextResponse){
  console.log(req,"req in API Stripe")
  const {item}= await req.json();
  console.log(item,"item")

    const transformedItem = {
         price_data: {
          currency: 'usd',
          product_data:{
            name: item.name,
            description: item.description,
            images:[item.image],
            metadata:{},

          },
          unit_amount: item.price * 100,

        },
        quantity: item.quantity,
        
      };
      const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://hackathon-one-tau.vercel.app';

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [transformedItem],
        mode: 'payment',
        success_url: 'https://hackathon-one-tau.vercel.app/success',
        cancel_url: 'https://hackathon-one-tau.vercel.app/failed',
        metadata: {
          images: item.image,
          name:"Hackathon",
          task:"Task Hackathon"
        },
      });

    //    console.log("response-------------------",await session);
    return NextResponse.json({ sessionId: session?.id });
  };