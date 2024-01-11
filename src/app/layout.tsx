"use client";
import React, {ReactNode, useContext} from "react";
import { Inter } from 'next/font/google'
import {ParallaxProvider} from "react-scroll-parallax";
import './globals.css'
import ConnectionManager from "@/app/Components/ConnectionManager";
import {ConnectionState} from "@/app/Components/ConnectionState";
import {AppContext, AppProvider} from "@/app/Providers/appProvider";
import {NextUIProvider} from "@nextui-org/react";
import Loading from "@/app/Components/Loading";

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({
  children
}: {
  children: ReactNode
}) => {
    const context: any = useContext(AppContext)

  return (
    <html lang="en">
        <body className={inter.className} style={{overflowY: 'hidden'}}>
        <NextUIProvider>
            <AppProvider>
                <Loading />
                <ParallaxProvider scrollAxis="horizontal">
                    {children}
                    <ConnectionManager />
                    <ConnectionState />
                </ParallaxProvider>
            </AppProvider>
        </NextUIProvider>
        </body>
    </html>
  )
}

export default RootLayout