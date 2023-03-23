const express = require("express");
const UserModel = require("../models/UserModel");
const router = express.Router();

//post ALL USERS  sadece name, mail, password, yazarsakta olur tek yazarsak onu ona esitledigimizi otomatik algilar. index.js e gittik. user index.jsde route i tanımladik.

router.post("/register", async (req, res) => {
  const { name, mail, password } = req.body;

  const newUser = new UserModel({
    name: name,
    mail: mail,
    password: password,
  });
  try {
    await newUser.save();
    res.send("User register is successfull");
  } catch (error) {
    res.send("User register is failed");
  }
});

module.exports = router;
