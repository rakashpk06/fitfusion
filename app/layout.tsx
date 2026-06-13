import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitFusion — Premium Gym & Activewear",
  description: "Shop the best gym and activewear for your fitness journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}