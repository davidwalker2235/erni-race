"use client";
import {useState, useEffect, ReactNode} from "react";
import {socket} from "@/app/socket";
import { Inter } from 'next/font/google'
import {ParallaxProvider} from "react-scroll-parallax";
import './globals.css'
import ConnectionManager from "@/app/Components/ConnectionManager";
import {ConnectionState} from "@/app/Components/ConnectionState";
import {AppProvider} from "@/app/Providers/appProvider";

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({
  children
}: {
  children: ReactNode,
    value: any
}) => {
    const [isConnected, setIsConnected] = useState(socket.connected);

    const onConnect = () => {
        setIsConnected(true);

    }
    const onDisconnect = () => {
        setIsConnected(false);
    }
    function onReceiveUsers() {
    }

    useEffect(() => {
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('receiveUsers', onReceiveUsers);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('receiveUsers', () => null);
        };
    }, []);

  return (
    <html lang="en">
        <body className={inter.className} style={{overflowY: 'hidden'}}>
        <AppProvider>
            <ParallaxProvider scrollAxis="horizontal">
                {children}
                <ConnectionState isConnected={ isConnected } />
                <ConnectionManager />
            </ParallaxProvider>
        </AppProvider>
        </body>
    </html>
  )
}

export default RootLayout