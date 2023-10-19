import { Analytics } from '@vercel/analytics/react';
import { Lora } from 'next/font/google';
import { Metadata } from 'next';
import Head from 'next/head';
import Navbar from './components/Navbar/navbar'
import './globals.css';

let title = 'Welcome home. - Mario G.' // Título de la web
let desc = 'Mi espacio en el Internet. ✨' // Descripción

const font = Lora({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
})


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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={font.className}>
    <Head>
      <meta name="theme-color" content="#000000"></meta>
    </Head>
    <body>
      <Navbar />
      {children}
      <Analytics />
    </body>
    </html>
  )
}
