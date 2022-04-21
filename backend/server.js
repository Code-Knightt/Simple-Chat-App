const app = require("express")();
const server = require("http").createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5500",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat-message", (data) => {
    io.emit("chat-message", data);
  });
});

server.listen(3030, () => {
  console.log("Backend server listening on port 3030");
});
