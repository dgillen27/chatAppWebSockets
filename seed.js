const { Message } = require("./models");

async function seed() {
  await Message.destroy({ where: {} });

  const message = await Message.create({
    userName: "SmellyJoe",
    content: "Wow my first message"
  });

  process.exit();
}

seed();
