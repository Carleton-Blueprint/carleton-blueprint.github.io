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
        <label className="block font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="bg-blueprint border-b-2 border-white focus:outline-none w-full py-2 px-3 leading-tight placeholder-white"
          name="email"
          id="email"
          type="email"
          placeholder="Enter a valid email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="bg-blueprint border-b-2 border-white focus:outline-none w-full py-2 px-3 leading-tight placeholder-white"
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="message">
          Message
        </label>
        <div
          className="bg-blueprint border-b-2 border-white focus:outline-none w-full py-2 px-3 leading-tight"
          contentEditable
          role="textbox"
          id="message"
        ></div>
      </div>
      <div className="flex items-center justify-center w-full mt-11">
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} ref={recaptchaRef} size="invisible" />
        <button
          className="bg-white hover:bg-blueprint-50 text-blueprint font-bold w-11/12 py-2 px-4 rounded-full tracking-[0.3em] hover:tracking-[0.2em] transition-all ease-in-out"
          type="submit"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}
