"use client";
import { Provider } from 'react-redux'
import './globals.css'
import { Inter } from 'next/font/google'
import store from './store/store'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Whispr',
  description: 'MERN Stack Chat app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </Provider>
  )
}
