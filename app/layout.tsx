import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Aman Tiwari | Fullstack Developer",
  description:
    "Hi, I'm Aman Tiwari, a passionate fullstack developer from India. Currently working on OpenAI and Gemini, and learning AI. I love collaborating on cool fullstack projects and open-source contributions.",
  keywords: [
    "Aman Tiwari",
    "Fullstack Developer",
    "React",
    "Node.js",
    "Next.js",
    "JavaScript",
    "OpenAI",
    "Gemini",
    "AI",
    "Web Development",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "React Native",
    "Docker",
    "GraphQL",
  ],
  authors: [{ name: "Aman Tiwari", url: "" }],
  creator: "Aman Tiwari",
  publisher: "Aman Tiwari",
  openGraph: {
    title: "Aman Tiwari | Fullstack Developer",
    description:
      "A passionate fullstack developer from India, currently working with OpenAI and Gemini. Explore my projects and connect with me.",
    url: "https://amantiwari.vercel.app/",
    siteName: "Aman Tiwari Portfolio",
    type: "website",
    images: [
      {
        url: "https://amantiwari.vercel.app/og-image.png", // Update with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Aman Tiwari - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Tiwari | Fullstack Developer",
    description:
      "Hi, I'm Aman Tiwari, a passionate fullstack developer from India. Currently working with OpenAI and Gemini, learning AI, and collaborating on exciting projects.",
    site: "@amantwri", // Update with your actual Twitter handle
    creator: "@amantwri",
    images: ["https://amantiwari.vercel.app/og-image.png"], // Update with your actual image
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
