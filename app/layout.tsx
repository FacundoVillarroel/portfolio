import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Facundo Villarroel portfolio",
  description: "Professional portfolio.",
  generator: "Facundo Villarroel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
