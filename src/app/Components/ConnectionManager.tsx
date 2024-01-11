import React, {useContext} from 'react';
import { socket } from "@/app/socket";
import {AppContext} from "@/app/Providers/appProvider";

const ConnectionManager = () => {
    const context: any = useContext(AppContext)
    const connect = () => {
        context?.setLoadingData({isLoading: true, loadingText: 'Connecting'})
        // socket.connect();
    }

    const disconnect = () => {
        // context?.showLoading(false)
        // socket.disconnect();
    }

    return (
        <div style={{position: "absolute", top: 0}}>
            <button onClick={ connect }>Connect</button>
            <button onClick={ disconnect }>Disconnect</button>
        </div>
    );
}

export default ConnectionManager;