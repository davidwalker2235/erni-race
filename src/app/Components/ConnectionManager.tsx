import React from 'react';
import { socket } from "@/app/socket";

const ConnectionManager = () => {
    const connect = () => {
        socket.connect();
    }

    const disconnect = () => {
        socket.disconnect();
    }

    return (
        <div style={{position: "absolute", top: 0}}>
            <button onClick={ connect }>Connect</button>
            <button onClick={ disconnect }>Disconnect</button>
        </div>
    );
}

export default ConnectionManager;