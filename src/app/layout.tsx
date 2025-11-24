import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  // optional but nice if you know the final domain:
  // metadataBase: new URL("https://anythangseptic.com"),
  title: {
    default: "Anythang Septic & Grading — North Georgia",
    template: "%s · Anythang Septic & Grading",
  },
  description:
    "Local pros for pump outs, repairs, new installs, drainage and grading. Dahlonega-based. Daytime service. Free appointments.",
  openGraph: {
    title: "Anythang Septic & Grading — North Georgia",
    description:
      "Pump outs, repairs, new installs, drainage and grading. Honest work, fair pricing, daytime service.",
    // images: ["/og.png"], // add later if you like
  },
  // icons: { icon: "/icon.png" }, // drop a 512×512 at /app/icon.png to set favicon automatically
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
