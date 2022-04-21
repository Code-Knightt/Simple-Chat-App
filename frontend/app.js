const socket = io("http://localhost:3030");

const userName = prompt("Enter your name: ");

socket.on("connect", () => {
  console.log(socket.id);
});

const messageForm = document.getElementById("message");
const messageInput = document.getElementById("message-input");
const messages = document.getElementById("messages");

messageInput.focus();

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (messageInput.value !== "") {
    console.log(messageInput.value.trim());
    socket.emit("chat-message", {
      user: userName,
      message: messageInput.value.trim(),
    });
    messageInput.value = "";
    messageInput.focus();
  }
});

socket.on("chat-message", (data) => {
  var item = document.createElement("li");
  item.classList.add("indi-message");
  item.textContent = `${data.user}: ${data.message}`;
  messages.appendChild(item);
});
