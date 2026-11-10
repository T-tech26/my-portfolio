import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tariladei Doutua",
  description: "A personal portfolio website showcasing my skills, projects, and experiences in web development and design.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${jetBrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex min-h-dvh flex-col bg-background font-sans text-on-surface">
        <Link
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-lg focus:bg-primary-container focus:px-4 focus:py-2 focus:font-mono focus:text-label focus:text-on-primary-container"
        >
          Skip to content
        </Link>

        <Header />
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            classNames: {
              toast:
                "bg-surface-bright! outline-none! border-none! text-label! font-mono!",
              success: "text-tertiary!",
              error: "text-error!",
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
