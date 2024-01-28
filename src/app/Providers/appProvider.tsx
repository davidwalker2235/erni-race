"use client";

import {createContext, useEffect, useState} from 'react';
import {socket} from "@/app/socket";
import {bool} from "prop-types";

export const AppContext = createContext(null);
export const AppProvider = ({children}: {
    children: React.ReactNode
}) => {

    const [isConnected, setIsConnected] = useState(socket.connected);
    const [loadingData, setLoadingData] = useState<{isLoading: boolean, loadingText?: string}>({isLoading: false, loadingText: ''})

    const onConnect = () => {
        debugger;
        console.log(socket?.id)
        setLoadingData({isLoading: false, loadingText: ''});

    }
    const onDisconnect = () => {
        setIsConnected(false);
    }
    const onReceiveUsers = () => {
    }

    useEffect(() => {
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('receiveUsers', onReceiveUsers);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('receiveUsers', () => null);
            debugger
            socket.emit('onDisconnect', socket?.id)
        };
    }, []);

    return (
        // @ts-ignore
        <AppContext.Provider value={{isConnected, loadingData, setLoadingData}}>
            {children}
        </AppContext.Provider>
    );
}