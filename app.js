const express = require("express");
const mongoose = require("mongoose");
const BlogRoute = require("./routes/blog.route");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json()); // JSON middleware должен идти выше маршрутов API

// Отдача HTML страниц
app.get("/posts", (req, res) => {
  res.sendFile(path.join(__dirname, "public/posts/index.html"));
});

app.get("/posts/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "public/post/post.html"));
});

// API маршруты
app.use("/api/posts", BlogRoute);

async function connectToDatabase() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@backenddb.puvtd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`
    );
    console.log("Connected to Database");
    app.listen(PORT, () => {
      console.log(`Server is working on ${PORT} port...`);
    });
  } catch (error) {
    console.error("Error with connection: ", error);
    process.exit(1);
  }
}

connectToDatabase();
