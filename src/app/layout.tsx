import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import MainImg from './components/MainImg'

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
      <body className="bg-amber-100 text-amber-950 dark:bg-amber-950">
        <Navbar />
        <MainImg />
        {children}
      </body>
    </html>
  )
}
