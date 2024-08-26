import { EmailTemplate } from "@/app/(pages)/contact/_components/email-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, message } = data;
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["cublueprinttesting@gmail.com"],
      subject: "Mesasge from Blueprint Contact Form",
      react: EmailTemplate({ name: name, email: email, message: message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
