import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Providers from '@/lib/providers';
import Navbar from '@/app/_components/Navbar';
import Footer from '@/app/_components/Footer';
import 'react-notion/src/styles.css';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  title: 'cuBlueprint',
  description: 'Tech for social good',
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
