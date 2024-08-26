import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Providers from '@/lib/providers';
import Navbar from '@/app/_components/Navbar';
import Footer from '@/app/_components/Footer';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';
import 'react-notion-x/src/styles.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  title: 'Carleton Blueprint',
  description: 'Tech for Social Good',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Providers>
        <body className={`${poppins.className}`}>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
