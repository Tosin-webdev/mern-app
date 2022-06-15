
import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/user.js'

// const postRoutes = require("./routes/posts.js");

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/user", userRoutes);
const CONNECTION_URL =
  "mongodb+srv://user1:simple02@node-tutorial.rsb65.mongodb.net/tracker-test?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log(`mongoDB connected: ${con.connection.host}`);
  } catch (err) {
    return error
    // console.log(err);
    // process.exit(1);
  }
};

connectDB();

export default app




// const express = require("express");
// const mongoose = require("mongoose");
// // const postRoutes = require("./routes/posts.js");
// const userRoutes = require("./routes/user.js");

// const app = express();
// app.use(express.json({ limit: "30mb", extended: true }));
// app.use(express.urlencoded({ limit: "30mb", extended: true }));

// app.use("/user", userRoutes);
// const CONNECTION_URL =
//   "mongodb+srv://user1:simple02@node-tutorial.rsb65.mongodb.net/tracker-test?retryWrites=true&w=majority";

// const connectDB = async () => {
//   try {
//     // mongodb connection string
//     const con = await mongoose.connect(CONNECTION_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     // console.log(`mongoDB connected: ${con.connection.host}`);
//   } catch (err) {
//     return error
//     // console.log(err);
//     // process.exit(1);
//   }
// };

// connectDB();

// module.exports = app
