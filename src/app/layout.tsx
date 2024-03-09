import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

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
      <body className={`${outfit.className} h-full`}>{children}</body>
    </html>
  );
}
