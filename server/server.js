const express = require("express");
const dotenv = require("dotenv");
const allChats = require("./data/data");
const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("API is up and running dawg");
});
// All chats
app.get("/api/chat", (req, res) => {
  res.send(allChats);
});
// Single Chat
app.get("/api/chat/:id", (req, res) => {
  const oneOnOneChat = allChats.find((chat) => chat.chatId === req.params.id);
  res.send(oneOnOneChat);
});

// const PORT = process.env.PORT || 5000:
const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`port somewhere ${PORT}`));

// Snippet
// rafce
