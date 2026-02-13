import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lan Anh's Portfolio",
  description: "Lan Anh's personal portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-linear-to-b from-[#4C6FAF] to-[#1E2B57]">
        {children}
      </body>
    </html>
  );
}
