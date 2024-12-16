'use client';
import { useToast } from '@/components/ui/use-toast';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Form() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    const message = (document.getElementById('message') as HTMLInputElement).innerText;

    await recaptchaRef.current?.executeAsync();
    const recaptchaValue = recaptchaRef.current?.getValue();
    console.log(recaptchaValue);
    const res: Response = await fetch('/api/send', {
      body: JSON.stringify({ email, name, message, captcha: recaptchaValue }),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
      toast({
        title: 'Message sent successfully',
        description: "We'll get back to as soon as possible",
      });
      setEmail('');
      setName('');
      (document.getElementById('message') as HTMLInputElement).innerText = '';
    } else {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again',
      });
    }
  }

  return (
    <form className="rounded text-white" onSubmit={sendEmail}>
      <div className="mb-4">
        <label className="mb-2 block font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="w-full border-b-2 border-white bg-blueprint px-3 py-2 leading-tight placeholder-white focus:outline-none"
          name="email"
          id="email"
          type="email"
          placeholder="Enter a valid email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-bold" htmlFor="name">
          Name
        </label>
        <input
          className="w-full border-b-2 border-white bg-blueprint px-3 py-2 leading-tight placeholder-white focus:outline-none"
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-bold" htmlFor="message">
          Message
        </label>
        <div
          className="w-full border-b-2 border-white bg-blueprint px-3 py-2 leading-tight focus:outline-none"
          contentEditable
          role="textbox"
          id="message"
        ></div>
      </div>
      <div className="mt-11 flex w-full items-center justify-center">
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} ref={recaptchaRef} size="invisible" />
        <button
          className="w-11/12 rounded-full bg-white px-4 py-2 font-bold tracking-[0.3em] text-blueprint transition-all ease-in-out hover:bg-blueprint-50 hover:tracking-[0.2em]"
          type="submit"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}
