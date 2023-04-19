import './globals.css';
import * as React from 'react';
import { AnalyticsWrapper } from './components/analytics';
import Navigationbar from './navbar'
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
        <Navigationbar />
        {children}
        <AnalyticsWrapper />
        <Footer />
      </body>
    </html>
  )
}
