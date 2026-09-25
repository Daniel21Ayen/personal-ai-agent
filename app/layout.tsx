import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/ConvexClientProvider";
<<<<<<< HEAD
import { SocketProvider } from "@/context/SocketContext";
=======
>>>>>>> feature/final-polish

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Personal Agent",
  description: "Your AI-powered personal assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConvexClientProvider>
<<<<<<< HEAD
            <SocketProvider>
              {children}
            </SocketProvider>
=======
            {children}
>>>>>>> feature/final-polish
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}