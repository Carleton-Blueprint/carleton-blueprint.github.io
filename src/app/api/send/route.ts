import { EmailTemplate } from '@/app/(pages)/contact/_components/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message, captcha } = await req.json();

  if (!captcha) {
    return NextResponse.json({ message: 'Captcha is required' }, { status: 400 });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Replace with your Secret Key
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

  const captchaResponse = await fetch(verifyUrl, { method: 'POST' });
  const captchaData = await captchaResponse.json();

  if (!captchaData.success) {
    return NextResponse.json({ message: 'Captcha verification failed' }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Carleton Blueprint <onboarding@resend.dev>',
      to: ['info@carletonblueprint.org'],
      subject: 'Message from Blueprint Contact Form',
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
