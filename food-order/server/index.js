//express paketini tanımladik
const express = require("express");
// cors paketini tanımladik
const cors = require("cors");

//const mongoose = require("mongoose");

//app middlewareini kullanarak express kütüphanesinin tüm özellkiklerinden faydalaniyor olacagaiz.
//app middleware i vasıtasıyla express kütüphanesine erişim sağladık.
const app = express();

//// db icin hazirlamis oldugumuz   js dosyasını cagıralım.SON ASAMA  en son burayı yazdik moongodb yi bagladik .mongoda veritabanına yemekdata json i girdik. ondan önce https://www.convertsimple.com/convert-javascript-to-json/ json ı burdan dönüstürdük json yemekdata olustruduk. sonra  add e basip yemekdata json dosyayolunu bulup sectik sonra json olarak yükle dedik. sonra models diye folder olustrduj sonraki asamaya gectik.
const db = require("./db");
const burgerModel = require("./models/BurgerModel");

////middlewareimiz ile cors kütüphanesini kullanmayı ve json req ve res'lerinde hata almanın önüne geçtik.
app.use(express.json());
// backend kodlarini geneleyen cors politikasından kurtulmak icin kullandigimiz bir kütüphane
app.use(cors());

//http://localhost:4000/getFoods ile postmanden verileri gördük .
/* app.get("/getFoods", async (req, res) => { getFoods kismi local den sonraki / dan sonra gelecek yazi ("/getFoods")istedigini yazabilirsin burada. */
//getFoods servisi
app.get("/getFoods", async (req, res) => {
  try {
    const foods = await burgerModel.find({});
    res.send(foods);
    console.log(foods);
  } catch (err) {
    console.log(err);
  }
});

//package json a "start": "nodemon index.js"  komutunu ekledik node index.js filan yazmak lazım ama normalde caslıstırmak scripti olarak yaz otomatik olarak her save de kayıt işlemi yapıp serveri ayaga kaldigiyıror.

var port = 4000;
app.listen(4000, () => {
  console.log(
    `Food Order Serverı ${port} portunda başarıyla ayağa kalktı. 🔥🔥`
  );
});
