"use client"
import './globals.sass'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import s from './layout.module.sass'
import { Providers } from './api/auth/helpers/session'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { moviesApi } from './api/auth/movies/movies.api'

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
        <ApiProvider api={moviesApi}>
        <Providers>
        <Header />
        {children}
        <Footer />
        </Providers>
        </ApiProvider>
      </body>
    </html>
  )
}
