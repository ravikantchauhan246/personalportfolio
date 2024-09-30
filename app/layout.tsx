import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ravikant's Portfolio",
  description:
    "Computer Science graduate with a passion for creating innovative web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Favicon --> */}
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />

        {/* <!-- SEO Metadata --> */}
        <title>Ravikant Chauhan | Web Developer & Cloud Enthusiast</title>
        <meta
          name="description"
          content="Ravikant Chauhan, a Computer Science graduate, specializes in building innovative web applications using modern technologies like React, Next.js, and cloud services."
        />
        <meta name="author" content="Ravikant Chauhan" />
        <meta
          name="keywords"
          content="Ravikant Chauhan, web developer, Next.js, React, cloud computing, software engineer, full stack development, JavaScript"
        />

        {/* <!-- Robots Metadata --> */}
        <meta name="robots" content="index, follow" />

        {/* <!-- Open Graph Metadata for Social Sharing --> */}
        <meta
          property="og:title"
          content="Ravikant Chauhan | Web Developer & Cloud Enthusiast"
        />
        <meta
          property="og:description"
          content="Portfolio of Ravikant Chauhan, a passionate web developer proficient in building web applications and cloud-based solutions."
        />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://www.ravikant.dev" />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Card Metadata for Social Sharing --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ravikant Chauhan | Web Developer & Cloud Enthusiast"
        />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Ravikant Chauhan, a creative web developer."
        />
        <meta name="twitter:image" content="/path-to-image.jpg" />

        {/* <!-- Viewport Settings for Mobile Optimization --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
