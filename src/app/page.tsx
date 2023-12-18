"use client";

import Image from 'next/image'
import { Server } from "socket.io"
import { useAzureSocketIO } from "@azure/web-pubsub-socket.io"

export default function Home() {

  let io = new Server(3000);

// Use the following line to integrate with Web PubSub for Socket.IO
  useAzureSocketIO(io, {
    hub: "Hub", // The hub name can be any valid string.
    connectionString: process.argv[2]
  });

  io.on("connection", (socket: any) => {
    // Sends a message to the client
    socket.emit("hello", "world");

    // Receives a message from the client
    socket.on("howdy", (arg: any) => {
      console.log(arg);   // Prints "stranger"
    })
  });

  return (
      <div>
        <div className="x-rays">
          <Image id="rotating-image" src="/rays.png" alt="Rotating" width={2000} height={2000} />
        </div>
        <Image
            src="/erniRaceLogo.png"
            className="logo"
            width={500}
            height={500}
            alt="logo of the app"
        />
      </div>
  );
}

/*
      <div>
        <div
            className={styles.main_div}
            style={{ display: showChat ? "none" : "" }}
        >
          <input
              className={styles.main_input}
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              disabled={showSpinner}
          />
          <input
              className={styles.main_input}
              type="text"
              placeholder="room id"
              onChange={(e) => setroomId(e.target.value)}
              disabled={showSpinner}
          />
          <button className={styles.main_button} onClick={() => handleJoin()}>
            {!showSpinner ? (
                "Join"
            ) : (
                <div className={styles.loading_spinner}></div>
            )}
          </button>
        </div>
        <div style={{ display: !showChat ? "none" : "" }}>
          <ChatPage socket={socket} roomId={roomId} username={userName} />
        </div>
      </div>
*/
