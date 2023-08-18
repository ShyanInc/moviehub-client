import './globals.sass'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import s from './layout.module.sass'
import { Providers } from './api/auth/helpers/session'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MovieHub',
  description: 'Movie Tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' ' + s.body}>
        <Providers>
        <Header />
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  )
}
