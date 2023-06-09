import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import { QueryProvider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Condens',
  description:
    'Effortlessly extract key takeaways from any podcast with Condens. Save time and get straight to the point.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
