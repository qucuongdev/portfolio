import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cuong_Bui Portfolio",
  description: "Created by Cuong_Bui",
  generator: "Cuong_Bui",
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
