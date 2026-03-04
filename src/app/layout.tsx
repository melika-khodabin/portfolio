import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { ScrollProgressBird } from "@/components/ui";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author.name }],
  icons: {
    icon: "/bird-icon.svg",
    shortcut: "/bird-icon.svg",
    apple: "/bird-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollProgressBird />
      </body>
    </html>
  );
}
