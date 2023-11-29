import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UsefulLinks from './components/UsefulLinks'

export const metadata: Metadata = {
  title: 'GW Lawyers Ltd',
  description: 'Webpage for GW Lawyers Ltd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <UsefulLinks/>
        <Footer/>
      </body>
    </html>
  )
}
