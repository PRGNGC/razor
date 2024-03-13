import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/features/store/provider"; 
import { QueryProvider } from './queryProvider'
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Razor Official Site",
  description: "Generated by create next app",
};


export default function RootLayout( { children } : Readonly <{children: React.ReactNode}> ){
  return (
      <html lang="en">
        <body className={inter.className}>
          <QueryProvider>
            <Providers>
              <Header></Header>
                {children}
              <Footer></Footer>
            </Providers>
          </QueryProvider>
        </body>
      </html>
  );
}
