import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { StoreProvider } from '@/redux/store-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './helpers/session';
import './globals.sass';
import s from './layout.module.sass';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MovieHub',
  description: 'Movie Tracker'
};

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
    <body className={inter.className + ' ' + s.body}>
    <StoreProvider>
      <Providers>
        <Header />
        {children}
        <Footer />
      </Providers>
    </StoreProvider>
    </body>
    </html>
  );
}
