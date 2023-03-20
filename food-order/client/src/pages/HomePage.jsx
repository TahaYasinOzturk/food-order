import React, { useEffect, useState } from "react";
import MenuList from "../components/MenuList";
import menuler from "../yemekdata";
import axios from "axios";

function HomePage() {
  //serverdan buraya geldik postmandne get ile geldigini gördük get send ledik veriler geldi. sonra clienta axios kurduk axios ile işlem yapuyoruz
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/getFoods")
      .then((res) => console.log(res.data))
      .then((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="row">
        {foods.map((menu) => (
          <div className="col-md-4">
            <MenuList menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
