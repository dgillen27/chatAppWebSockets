const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const logger = require("morgan");
const bodyParser = require("body-parser");
var cors = require("cors");
const { Message } = require("./models");
const port = 8080;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

server.listen(port, () => console.log(`IO SERVER Listening on port ${port}`));

io.on("connection", socket => {
  console.log("New client connected");

  // just like on the client side, we have a socket.on method that takes a callback functio
  // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
  // we make use of the socket.emit method again with the argument given to use from the callback function above

  socket.on("new message", message => {
    console.log("New Message");
    io.sockets.emit("new message", message);
  });

  socket.on("user", activeUser => {
    console.log(`${activeUser} is  active`);
    io.sockets.emit("user", activeUser);
  });

  // disconnect is fired when a client leaves the server
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Friend!");
});

app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.findAll();
    const message = messages.map(message => message.dataValues);

    res.json({ message: message });
  } catch (e) {
    console.error(e);
  }
});

app.post("/messages", async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.json({ message: message });
  } catch (e) {
    console.error(e);
  }
});

// app.listen(port, () => console.log(`App listenging on port ${port}`));

// Socket Stuff
