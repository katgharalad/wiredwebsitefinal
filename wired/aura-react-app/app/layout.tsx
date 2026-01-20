import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "Aura Financial | Future Banking",
  description: "Advanced financial protocols merged with intuitive design. We provide the infrastructure to accelerate your economic legacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${newsreader.variable} min-h-screen overflow-x-hidden selection:bg-[#38BDF8] selection:text-black relative`}
        style={{ 
          fontFamily: 'var(--font-inter)',
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
