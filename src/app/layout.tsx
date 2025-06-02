import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "InspoShelf",
  description: "Web Design Resource Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
