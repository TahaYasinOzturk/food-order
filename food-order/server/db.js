const mongoose = require("mongoose");

require("dotenv").config();
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

/* const DB_LINK =
  "mongodb+srv://admin:1234@cluster1.hcw2akv.mongodb.net/food-order?retryWrites=true&w=majority";
mongoose.connect(DB_LINK); */
/* npm dotenv yi kurduk env olusturduk. dotenv yi connectledik */

//connection'ın açık kapalı olmasına göre iki farklı opsiyon verdiğimiz veritabanını dinleyen metotları yazalım.
var db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongo DB bağlantısı başarıyla sağlandı");
});

db.on("error", () => {
  console.log("Mongo DB bağlantısı arızalı");
});

module.exports = mongoose;
