import React, {useContext} from 'react';
import {AppContext} from "@/app/Providers/appProvider";

export function ConnectionState() {
    const context: any = useContext(AppContext)
    return <p>State: { '' + context.isConnected }</p>;
}