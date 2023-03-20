const mongoose = require("mongoose");

// baglatıyı burdan connect ediyoruz.
mongoose.connect(
  "mongodb+srv://admin:1234@cluster1.hcw2akv.mongodb.net/food-order?retryWrites=true&w=majority"
);

//connection'ın açık kapalı olmasına göre iki farklı opsiyon verdiğimiz veritabanını dinleyen metotları yazalım.

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB bağlantısı başarıyla sağlandı");
});

db.on("error", () => {
  console.log("Mongo DB bağlantısı arızalıdır.");
});

module.exports = mongoose;
