import { io } from "socket.io-client";

let messageContainer = document.getElementById("message-container");
let sendContainer = document.getElementById("send-container");
let messageInput = document.getElementById("message-input");
let sendButton = document.getElementById("send-button");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  appendMessage(`you ocnnected with ID : ${socket.id}`);
});

socket.on("receive-message", (receiveMessage) => {
  appendMessage(receiveMessage);
});

if (sendContainer) {
  sendContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(messageInput.value);
    appendMessage(messageInput.value);
    socket.emit("send-message", messageInput.value);
  });
}

function appendMessage(message) {
  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = message;
  messageContainer.append(messageDiv);
}
