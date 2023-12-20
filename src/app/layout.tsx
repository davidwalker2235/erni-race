import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {io} from "socket.io-client"

const socket = io("erni-race-server.azurewebsites.net");
// Receives a message from the server
socket.on("hello", (arg) => {
  console.log(arg);
});

// Sends a message to the server
socket.emit("howdy", "stranger")

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
