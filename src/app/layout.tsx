import type { Metadata } from "next";
import "./globals.css";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "ClarionEDU - Bitcoin Education",
  description: "The world's most comprehensive Bitcoin education platform. Learn about hard money, Austrian economics, and Bitcoin from first principles.",
  keywords: ["Bitcoin", "education", "hard money", "Austrian economics", "cryptocurrency", "financial sovereignty"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
