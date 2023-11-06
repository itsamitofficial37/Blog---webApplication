const express = require("express");
require('dotenv').config();
const PORT = process.env.PORT || 3001;

const app = express();

// middleware

app.use(express.json());

const blog = require("./routes/blog");

// mount

app.use("/api/v1", blog);

const connectDB = require("./config/database");
connectDB();

app.get("/", (req, res) => {
  res.send("This is Home page baby");
});

app.listen(PORT, () => {
  console.log(`App is listining on ${PORT}`);
});
