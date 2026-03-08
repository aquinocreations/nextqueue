import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-02-25.clover",
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, destinations, startDate, endDate, budget, interests } =
      body;

    if (!name || !email || !destinations || !startDate || !endDate) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const origin = req.headers.get("origin") || "http://localhost:3000";

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Custom Travel Itinerary Plan",
              description: `Personalized itinerary for ${destinations}`,
            },
            unit_amount: 29700,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}?success=true`,
      cancel_url: `${origin}?canceled=true`,
      metadata: {
        client_name: name,
        client_email: email,
        destinations,
        start_date: startDate,
        end_date: endDate,
        budget: budget || "not specified",
        interests: interests?.slice(0, 500) || "not specified",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    const message =
      err instanceof Error ? err.message : "Failed to create checkout session";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
