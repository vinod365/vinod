import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Vinod | Full Stack Developer",
  description: "Portfolio of Vinod, a Full Stack Developer specializing in building precise, engaging, and accessible digital experiences.",
  keywords: ["Full Stack Developer", "Vinod", "React", "Next.js", "Software Engineer"],
  authors: [{ name: "Vinod" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} scroll-smooth dark font-sans`}
    >
      <body className="antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
