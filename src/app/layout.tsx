// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";
import Navbar from "./Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

// export const metadata: Metadata = {
//   title: "cuBlueprint",
//   description: "Tech for social good",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <title>cuBlueprint</title>
        <meta name="description" content="Tech for social good" />
      </head>
      <Providers>
        <body className={`${poppins.className}`}>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
