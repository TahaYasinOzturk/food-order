const express = require("express");
const UserModel = require("../models/UserModel");
const router = express.Router();

//post ALL USERS  sadece name, mail, password, yazarsakta olur tek yazarsak onu ona esitledigimizi otomatik algilar. index.js e gittik. user index.jsde route i tanımladik.

//Register
router.post("/register", async (req, res) => {
  const { name, mail, password } = req.body;

  //23.03 Adım5: registerpageden sonra burada eski kullanici tanimlandi. else tarafi önceden vardi else icine aldık sadece. if else yaptık kullanici eklemeyi else yapıcak.
  const oldUser = await UserModel.findOne({ mail: mail });
  if (oldUser) {
    res.status(400).json({ message: "Böyle bir kullanıcı bulunmaktadır" });
  } else {
    /* burda veritabanı objesi olustulcak fronetnde ise obje olusuyor kullnaici degeriini giriyor. burda bu ikisini esşletiriyor gibi. */
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
  }
});

//Login
router.post("/login", async (req, res) => {
  const { mail, password } = req.body;
  // const mail = req.body.mail;
  // const password = req.body.password /user daki pass ile pas mail ile mail burdakiyle esleşiyorsa userdan  sonra login asamalarini yapıyoruz.

  try {
    const user = await UserModel.find({ mail: mail, password: password });
    //boyle bir kullanici varsa . kullanici bulucak zaten 1 kullanıcı bulacak find ile .o dönecek indexi 0 dan büyük se ona göre işlem yapsın  kullanıcı bilgilerini göndericek. yoksa hata göndericek. front ende gittik useraction a gittik serverda servisi yazdık postmanden deneyebilirsin. servera daki servisleri deneyelim.sonra frontede gittik. http://localhost:4000/api/users/login postmanda mail ve pasworrd gönderip kontol sagladik bilgiler geldi.
    if (user.length > 0) {
      res.send(user[0]);
    } else {
      res.status(400).json({ message: "Böyle bir kullanıcı bulunmamaktadır" });
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
