import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { SpotlightProvider } from "@/contexts/SpotlightContext";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
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
        className={`${cinzel.variable} ${inter.variable} antialiased`}
      >
        <SmoothScroll>
          <SpotlightProvider>
            <CustomCursor />
            {children}
          </SpotlightProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
