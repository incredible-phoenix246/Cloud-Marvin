import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./Styles/globals.css";


const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud Marvin",
  description: "A community for cybersecurity ethauist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
