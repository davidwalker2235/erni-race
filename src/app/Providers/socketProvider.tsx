"use client";

import { createContext, useContext, useState } from 'react';
import {io} from "socket.io-client"

const SocketContext = createContext({});

export function SocketProvider({children}: {
    children: React.ReactNode
}) {

    // const socket = io("erni-race-server.azurewebsites.net");
    const socket = io("localhost:3001");
// Receives a message from the server
    socket.on("connection", (arg) => {
        console.log(arg);
    });

// Sends a message to the server
    socket.emit("howdy", "stranger")
    const [isOpen, setIsOpen] = useState();

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
}