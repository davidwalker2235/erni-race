"use client";

import Image from 'next/image'
import {io} from "socket.io-client"

const socket = io("erni-race-server.azurewebsites.net");
// Receives a message from the server
socket.on("connection", (arg) => {
    console.log(arg);
});

// Sends a message to the server
socket.emit("howdy", "stranger")

export default function Home() {

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
