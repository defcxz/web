import { Metadata } from 'next';
import './globals.css';
import * as React from 'react';
import Navigationbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

export const metadata: Metadata = {
  title: 'Welcome home.',
  description: 'Mi portafolio web.',
  keywords: ['Next.js', 'TypeScript', 'React', 'Portfolio', 'Mario G.'],
  authors: [{ name:'Mario G.', url: 'https://mgu.vercel.app' }],
  colorScheme: 'dark',

  openGraph: {
    url: 'https://mgu.vercel.app',
    title: 'Welcome home.',
    description: 'Mi portafolio web.',
    images: [
      {
        url: '/favicon.ico',
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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      
      <body>
        {/* <Navigationbar /> */}
          {children}
        <Footer />
      </body>
    </html>
  )
}
