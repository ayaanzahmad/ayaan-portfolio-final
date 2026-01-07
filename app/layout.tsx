import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SpotlightProvider } from "@/contexts/SpotlightContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayaan Ahmad | Systems Engineer & Full-Stack Developer",
  description: "Systems engineer specializing in distributed infrastructure, enterprise virtualization, and production SaaS development. Building scalable solutions across the full stack—from bare metal servers to cloud applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpotlightProvider>
          {children}
        </SpotlightProvider>
      </body>
    </html>
  );
}
