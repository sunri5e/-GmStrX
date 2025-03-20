import type { Metadata } from "next";
import Header from "@/components/Header";
import { Roboto } from "next/font/google";
import "@/styles/main.scss";

const robotoSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orders App",
  description: "A simple orders app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable}`}>
        <Header />
        <div className="app-l-main">
          <main className="app-l-container">{children}</main>
        </div>
      </body>
    </html>
  );
}
