
const axios = require("axios");
const { Telegraf } = require("telegraf");
require("dotenv").config();


const express = require("express");
const app = express();


app.use(express.json());app.get("/", (req, res) => {
    res.send("Hello World!");
  });


  const bot = new Telegraf(process.env.BOT_TOKEN);
  const WEBHOOK_URL = process.env.WEBHOOK_TOKEN_URL;
  const TELEGRAM_API = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;

  const setWebhook = async () => {
    try {
      const response = await axios.post(
        `${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };




  bot.on("text", (ctx) => {
    if (ctx.message.text === ".") {
      ctx.reply(`vai se foder ${ctx.message.from.first_name}, sua bixa!`);
    }
  });



  bot.launch();

  app.listen(3000, async () => {
    console.log("Server is running on port 3000");
    await setWebhook();
  });