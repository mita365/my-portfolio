import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maya Akter Mita | Portfolio",
  description:
    "Portfolio of Maya Akter Mita, a Southeast University student focused on web development, networking, Linux, and cloud technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
