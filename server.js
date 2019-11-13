const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const { Message } = require("./models");
const port = 8080;

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Friend!");
});

app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.findAll();
    const message = messages.map(message => message.dataValues);

    res.json({ message: message });
  } catch (e) {
    console.log("e");
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

app.listen(port, () => console.log(`App listenging on port ${port}`));
