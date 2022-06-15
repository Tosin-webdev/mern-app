import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// res.header("Access-Control-Allow-Origin");

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";

const port = process.env.PORT || 5000;
// initialize the app
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("welcome to finder api!");
});

const CONNECTION_URL =
  "mongodb+srv://user1:simple02@node-tutorial.rsb65.mongodb.net/newDB?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongoDB connected: ${con.connection.host}`);
  } catch (err) {
    // console.log(err);
    process.exit(1);
  }
};

connectDB();

// module.exports = connectDB;
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

