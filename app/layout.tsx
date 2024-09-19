import type { Metadata } from "next";
//import localFont from "next/font/local";
import { Montserrat } from "next/font/google"
import "./globals.css";

const font = Montserrat({subsets: ["latin"]  });
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Jesus's Home Page",
  description: "Creado en el curso de DevTalles con Fernando Herrera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
