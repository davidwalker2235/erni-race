"use client";

import { io } from "socket.io-client";
import { useState } from "react";
import Image from 'next/image'

export default function Home() {
    const [showChat, setShowChat] = useState(false);
    const [userName, setUserName] = useState("");
    const [showSpinner, setShowSpinner] = useState(false);
    const [roomId, setroomId] = useState("");

    var socket: any;
    socket = io("http://localhost:3001");

    const handleJoin = () => {
        if (userName !== "" && roomId !== "") {
            console.log(userName, "userName", roomId, "roomId");
            socket.emit("join_room", roomId);
            setShowSpinner(true);
// You can remove this setTimeout and add your own logic
            setTimeout(() => {
                setShowChat(true);
                setShowSpinner(false);
            }, 4000);
        } else {
            alert("Please fill in Username and Room Id");
        }
    };

    return (
        <div>
            <Image
                src="/layer01.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <Image
                src="/layer02.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
        </div>
    );
}
