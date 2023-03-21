//express paketini tanımladık
const express = require("express");

//cors paketini tanımladık.
const cors = require("cors");

//app middleware i vasıtasıyla express kütüphanesine erişim sağladık.
const app = express();

//db için hazırlamış olduğumuz js dosyasını çağıralım.
const db = require("./db");
//buraya bak router asamasında ekledik
const burgerModel = require("./models/BurgerModel");
const burgersRoute = require("./routes/burgersRoute");

//middlewareimiz ile cors kütüphanesini kullanmayı ve json req ve res'lerinde hata almanın önüne geçtk.
app.use(express.json());
app.use(cors());

//enson router  asamasında yaptıgımız icin yazdik.
//servisleri route ile çağırma
app.use("/api/burgers", burgersRoute);

//getFoods servisi
app.get("/api/burgers", async (req, res) => {
  try {
    const foods = await burgerModel.find({});
    res.send(foods);
    // console.log(users);
  } catch (err) {
    console.log(err);
  }
});

//serverımızı inşa edeceğimiz portu belirledik.
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server UP Port: ${PORT}`);
});
