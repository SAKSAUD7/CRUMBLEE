import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import dynamic from 'next/dynamic';
// import CustomCursor from "@/components/ui/CustomCursor";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Navbar from "@/components/layout/Navbar";

const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), { ssr: false });

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "CRUMBELLE | Premium Cookies & Brownies",
  description: "Cinematic experience for the finest cookies and brownies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-body`}
      >
        <CustomCursor />
        <WhatsAppButton />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
