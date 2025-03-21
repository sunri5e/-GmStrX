import type { Metadata } from "next";
import Header from "@/components/Header";
import { Roboto } from "next/font/google";
import StoreProvider from "@/components/StoreProvider";
import "@/styles/main.scss";

const robotoSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orders App",
  description: "A simple orders app",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable}`}>
        <StoreProvider>
          <Header />
          <div className="app-l-main">
            <main className="app-l-container">{children}</main>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
