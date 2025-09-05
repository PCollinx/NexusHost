import "./globals.css";
import { ParticlesProvider } from "./components/ParticlesProvider";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata = {
  title:
    "NexusHost - Premium Web Hosting Solutions | 99.9% Uptime Guaranteed",
  description:
    "Experience premium web hosting with NexusHost. Shared hosting, VPS, dedicated servers, and cloud solutions. 24/7 expert support, SSL certificates, and 99.9% uptime guarantee.",
  keywords:
    "web hosting, shared hosting, VPS hosting, dedicated servers, cloud hosting, domain registration, SSL certificates, WordPress hosting",
  authors: [{ name: "NexusHost" }],
  creator: "NexusHost",
  publisher: "NexusHost",
  openGraph: {
    title: "NexusHost - Premium Web Hosting Solutions",
    description:
      "Premium web hosting with 99.9% uptime guarantee and 24/7 expert support",
    url: "https://nexushost.com",
    siteName: "NexusHost",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NexusHost - Web Hosting Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusHost - Premium Web Hosting Solutions",
    description:
      "Premium web hosting with 99.9% uptime guarantee and 24/7 expert support",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/nexushost-icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ParticlesProvider>{children}</ParticlesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
