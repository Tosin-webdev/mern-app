// const request = require("supertest");
// const Jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const app = require("../app");
import request from "supertest"
import Jwt  from "jsonwebtoken"
// import mongoose  from "mongoose"
import app from '../app.js'


// const userOneId = new mongoose.Types.ObjectId();
// const userOne = {
//   _id: userOneId,
//   name: "Mike Enzo",
//   email: "mike@gmail.com",
//   password: "peace",
//   //   tokens: [{ token: Jwt.sign({ _id: userOneId }, process.env.JWT_SECRET) }],
// };

// beforeEach(async () => {
//   await User.deleteMany();
//   await new User(userOne).save;
// });

test("Should signup a new user", async () => {
    await request(app).post("/user/signup")
    .send({
      name: "oladeji Tosin",
      email: "oladejit24@gmail.com",
      password: "1234",
    })
    .expect(201);
});
