import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/convex-client-provider";
import { Suspense } from "react";
import { Loading } from "@/components/auth/loading";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liro",
  description: "Collaboration at its finest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="spotion-theme"
        >
          <Suspense fallback={<Loading />}>
            <ConvexClientProvider>
              <Toaster />
              <ModalProvider />
              {children}
            </ConvexClientProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
