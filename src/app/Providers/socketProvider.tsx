"use client";

import { createContext } from 'react';
import {io} from "socket.io-client"

const SocketContext = createContext({});

export function SocketProvider({children}: {
    children: React.ReactNode
}) {

    // const socket = io("erni-race-server.azurewebsites.net");
    const socket = io("localhost:3001");
    // @ts-ignore
    socket.on("connect", (socket: any) => {
        console.log(socket.id);
    });

    return (
        <SocketContext.Provider value={{ socket: socket }}>
            {children}
        </SocketContext.Provider>
    );
}
