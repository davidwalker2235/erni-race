"use client";

import { Inter } from 'next/font/google'
import {ParallaxProvider} from "react-scroll-parallax";
import {SocketProvider} from "@/app/Providers/socketProvider";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className} style={{overflowY: 'hidden'}}>
            <SocketProvider>
                <ParallaxProvider scrollAxis="horizontal">
                    {children}
                </ParallaxProvider>
            </SocketProvider>
        </body>
    </html>
  )
}
