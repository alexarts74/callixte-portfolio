import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Callixte | Danseuse Contemporaine",
  description: "Portfolio de Callixte, danseuse et chorégraphe contemporaine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen w-full overflow-x-hidden bg-white text-black antialiased leading-relaxed">
        {children}
      </body>
    </html>
  );
}
