import type { Metadata } from "next";
import { Toaster } from "sonner";
import { geistMono, geistSans } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santa Cafeína - Café Orgánico Premium",
  description:
    "Café 100% orgánico de alta calidad de las montañas de Trujillo, Perú",
  generator: "Ziphonex Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
