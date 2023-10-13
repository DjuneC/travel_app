import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel App',
  description: 'Travel UI/UX app for camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
