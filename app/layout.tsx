import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

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
  title: "Callixte | Contemporary Dancer",
  description: "Portfolio of Callixte, contemporary dancer and choreographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth overscroll-none`}>
      <body className="min-h-screen w-full overflow-x-hidden overscroll-none bg-white text-black antialiased leading-relaxed">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
