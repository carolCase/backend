const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/currentDateTime", (req, res) => {
  const currentDate = new Date();
  const response = {
    currentDateTime: currentDate.toLocaleString(),
  };
  res.json(response);
});

app.post("/api/saveScoreDataWithAxios", async (req, res) => {
  const { playerName, score } = req.body;
  const newScoreEntry = { playerName, score };
  try {
    await axios.post("http:localhost:3001/api/saveScoreDta", newScoreEntry);
    res.json({ success: true });
  } catch (error) {
    console.error("Error saving score", error);
    res.status(500).json({ success: false, error: "server error" });
  }
});

app.get("/api/allGameData", (req, res) => {
  res.json({ scoreData });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
