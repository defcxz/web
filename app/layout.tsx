import './globals.css';
import * as React from 'react';
import Navigationbar from './components/Navbar/navbar';
import Footer from './components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <title>Inicio</title>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      
      <head />
      <body>
        <main>
          {/* <Navigationbar /> */}
            {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
