import './globals.css';
import * as React from 'react';
import Navigationbar from './navbar'
import Footer from './footer'
import Content from './content.json'

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
      <title>{Content.nombre}</title>
      <head />
      <body>
          <Navigationbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
