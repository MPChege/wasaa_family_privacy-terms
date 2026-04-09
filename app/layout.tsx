import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Legal — Wasaa Family',
    template: '%s — Wasaa Family',
  },
  description: 'Privacy Policy and Terms of Service for the Wasaa Family platform.',
  icons: { icon: '/icon.png', apple: '/icon.png' },
  openGraph: {
    siteName: 'Wasaa Family',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
