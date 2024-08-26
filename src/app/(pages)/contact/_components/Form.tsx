'use client';
import { useToast } from '@/components/ui/use-toast';

export default function Form() {
  const { toast } = useToast();
  async function sendEmail(e: React.FormEvent) {
    e.preventDefault();

    const email = (document.getElementById('email') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLInputElement).innerText;

    const res: Response = await fetch('/api/send', {
      body: JSON.stringify({ email, name, message }),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
      toast({
        title: 'Message sent successfully',
        description: "We'll get back to as soon as possible",
      });
    } else {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again',
      });
    }
  }

  return (
    <form className='rounded text-white' onSubmit={sendEmail}>
      <div className='mb-4'>
        <label className='block font-bold mb-2' htmlFor='email'>
          Email
        </label>
        <input
          className='bg-blueprint border-b-2 border-white focus:outline-none w-full py-2 px-3 leading-tight placeholder-white'
          name='email'
          id='email'
          type='email'
          placeholder='Enter a valid email address'
        />
      </div>
      <div className='mb-4'>
        <label className='block font-bold mb-2' htmlFor='name'>
          Name
        </label>
        <input
          className='bg-blueprint border-b-2 border-white focus:outline-none w-full py-2 px-3 leading-tight placeholder-white'
          id='name'
          type='text'
          placeholder='Enter your name'
        />
      </div>
      <div className='mb-4'>
        <label className='block font-bold mb-2' htmlFor='message'>
          Message
        </label>
        <div
          className='bg-blueprint border-b-2 border-white focus:outline-none w-full py-2 px-3 leading-tight'
          contentEditable
          role='textbox'
          id='message'
        ></div>
      </div>
      <div className='flex items-center justify-center w-full mt-11'>
        <button
          className='bg-white hover:bg-blueprint-50 text-blueprint font-bold w-11/12 py-2 px-4 rounded-full tracking-[0.3em] hover:tracking-[0.2em] transition-all ease-in-out'
          type='submit'
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}
