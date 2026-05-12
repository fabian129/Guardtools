import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "GuardTools — Vi är Blue Mobile Systems",
  description: "Den banbrytande digitala helhetslösningen för bemannad bevakning och larm. Grundat 2004.",
  openGraph: {
    title: "GuardTools — Vi är Blue Mobile Systems",
    description: "Den banbrytande digitala helhetslösningen för bemannad bevakning och larm.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
        <Script
          src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
