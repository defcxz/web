import './globals.css';
import * as React from 'react';
import { AnalyticsWrapper } from './components/analytics';
import Navbar from './navbar'
import Footer from './footer'


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
      <head />
      <body>
        <Navbar />
        {children}
        <AnalyticsWrapper />
        <Footer />
      </body>
    </html>
  )
}
