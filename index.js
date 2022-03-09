require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const API_URL = "https://api.rawg.io/api";

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to GAMEPAD API" });
});

// List of games

app.get("/games", async (req, res) => {
  console.log("games");
  try {
    const response = await axios.get(
      `${API_URL}/games?key=${process.env.GAMEPAD_API_KEY}`
    );
    const games = response.data;
    res.json(games);
  } catch (error) {
    console.log(error.message);
  }
});
app.all("*", (req, res) => {
  console.log("route not found");
});
app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
