const mongoose = require(`mongoose`);
//ad: {type: String, require}, yada   name: {    type: String,    require: true,  },  bu sekilde olur.
//timestamps: true güncellendigi tarihi tutucak yer
const burgerSchema = new mongoose.Schema(
  {
    ad: { type: String, require },
    ozellik: [],
    fiyat: [],
    kategori: { type: String, require },
    img: { type: String, require },
    desc: { type: String, require },
  },

  {
    timestamps: true,
  }
);
//önce tablo adı yazilir sonra seme adi yazilir.
const burgerModel = mongoose.model("foods", burgerSchema);

module.exports = burgerModel;
