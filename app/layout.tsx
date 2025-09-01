import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "@/styles/globals.scss";

const bodyFont = Montserrat({
  variable: "--body-font",
  subsets: ["latin"],
  fallback: ["arial", "sans-serif"],
});

const headingFont = Poppins({
  variable: "--heading-font",
  weight: "700",
  subsets: ["latin"],
  fallback: ["arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Andi Meier, Frontend Entwickler",
  description:
    "Hallo, ich bin Andi, ein Frontend Entwickler. Meine Leidenschaft ist die Verbindung von Technik und Gestaltung. Ich entwickle innovative Frontend-Lösungen, die sowohl technisch ausgereift als auch intuitiv zu bedienen sind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
