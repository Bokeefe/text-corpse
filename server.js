const express = require("express");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = require("http").createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

wss.on("connection", (ws) => {
  console.log("Client connected");
  const corpse = [];

  ws.on("message", (message) => {
    console.log("Received: " + message);
    corpse.push(message.endWith(" ") ? message : message + " ");
    ws.send("Server received: " + message);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
