import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Beams from "@/components/Beams";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BDP - Litigio y consultoria",
  description:
    "Firma de abogados especializada en litigio y consultoría multidisciplinaria en el área del derecho público",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100dvh",
            zIndex: 0,
            pointerEvents: "none",
            backgroundColor: "#000000",
          }}
        >
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={4}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={34}
          />
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
