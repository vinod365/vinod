import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Vinod — Full Stack Engineer",
  description: "Portfolio of Vinod, a Full Stack Engineer specialized in building sovereign AI solutions and enterprise-grade platforms.",
  keywords: ["Full Stack Developer", "Vinod", "React", "Next.js", "AI Engineer", "Cybersecurity"],
  authors: [{ name: "Vinod" }],
  metadataBase: new URL("https://www.vinodevx.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark font-sans`}
    >
      <body className="antialiased selection:bg-accent/30 selection:text-accent font-sans">
        <div className="grid-bg" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
