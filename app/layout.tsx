"use client";

import "./globals.css";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white" suppressHydrationWarning>
        <Sidebar />
        <main className="ml-20 relative z-10">{children}</main>
      </body>
    </html>
  );
}
