"use client";

import { createContext } from 'react';

export const AppContext = createContext(null);

export const AppProvider = ({children}: {
    children: React.ReactNode
}) => {

    return (
        // @ts-ignore
        <AppContext.Provider value="dark">
            {children}
        </AppContext.Provider>
    );
}