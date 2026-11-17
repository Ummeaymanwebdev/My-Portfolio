import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Umme Ayman Trina | Frontend Developer",
  description:
    "Portfolio of Umme Ayman Trina, a frontend developer building responsive websites with Next.js, React and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-bg font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
