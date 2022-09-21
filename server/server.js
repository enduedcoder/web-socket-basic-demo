const io = require("socket.io")(3000, {
  cors: ["http://localhost:8081"],
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("send-message", (message) => {
    socket.broadcast.emit("receive-message", message);
    //  console.log(message);
  });
});
