import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import './globals.css';
import * as React from 'react';
import Footer from './components/Footer/footer';

let title = 'Welcome home. - Mario G.' // Título de la web
let desc = 'Mi espacio en el Internet. ✨' // Descripción

export const metadata: Metadata = {
  title: title,
  description: desc,
  keywords: ['Next.js', 'TypeScript', 'React', 'Portfolio', 'Mario G.'],
  authors: [{ name: 'Mario G.', url: 'https://mgu.vercel.app' }],
  colorScheme: 'dark',

  openGraph: {
    url: 'https://mgu.vercel.app',
    title: title,
    description: desc,
    images: [
      {
        url: 'https://i.pinimg.com/564x/c3/35/15/c335151d9d1d02cd0d9831c8668249d5.jpg',
        width: 500,
        height: 500,
        alt: 'Mario G.',
      },
    ],
    siteName: 'Mario G.',
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      {/* Verificación Google Search Console. */}
      <head>
        <meta name="google-site-verification" content="MMUlHhRR8WFb_SKbT0Y15L9EW4TElTjiAnf_778EG0s" />
      </head>
      <body>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
