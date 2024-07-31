const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello");
});

// Start the server
const start = () => {
  try {
    app.listen(PORT, () => {
      console.log("Server is running at port", PORT);
    });
  } catch (error) {
    console.log({ err: error });
  }
};

start();
