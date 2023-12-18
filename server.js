const { Server } = require("socket.io");
const { useAzureSocketIO } = require("@azure/web-pubsub-socket.io");

let io = new Server(3000);

// Use the following line to integrate with Web PubSub for Socket.IO
useAzureSocketIO(io, {
    hub: "Hub", // The hub name can be any valid string.
    connectionString: "Endpoint=https://erni-race-server.webpubsub.azure.com;AccessKey=RZq9o8HbBg/ze1wn/+l5JieSQ/MgqkN+gC0N3OUNiis=;Version=1.0;"
});

io.on("connection", (socket) => {
    // Sends a message to the client
    socket.emit("hello", "world");

    // Receives a message from the client
    socket.on("howdy", (arg) => {
        console.log(arg);   // Prints "stranger"
    })
});