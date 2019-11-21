const { Message } = require("./models");

async function seed() {
  await Message.destroy({ where: {} });

  const message = await Message.create({
    userName: "Dan",
    content:
      "Hello and welcome to the group chat! I just reset the database so if its looking empty here, that's why!"
  });

  process.exit();
}

seed();
