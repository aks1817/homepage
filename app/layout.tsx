import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VegaPro.ai | Innovate Faster",
  description: "Boost your Business with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
