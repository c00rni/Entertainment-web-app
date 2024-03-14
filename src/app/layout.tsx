import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streaming platform",
  description: "Streamind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full text-white font-extralight box-border m-0 p-0 text-base10"
    >
      <body className={`${outfit.className} h-full`}>
      <Toaster position="bottom-center"/>
        {children}
      </body>
    </html>
  );
}
