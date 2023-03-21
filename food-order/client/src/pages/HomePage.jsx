import React, { useEffect, useState } from "react";
import MenuList from "../components/MenuList";
import menuler from "../yemekdata";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllBurgers } from "../actions/burgerActions";

function HomePage() {
  const GET_FOOD_URL = "http://localhost:4000/getFoods";

  const [foods, setFoods] = useState([]);

  const burgerState = useSelector((state) => state.getAllBurgersReducer);

  const { burgers, loading } = burgerState;

  const dispatch = useDispatch();

  useEffect(() => {
    // axios
    //   .get(GET_FOOD_URL)
    //   .then((res) => setFoods(res.data))
    //   .catch((err) => console.log(err));

    dispatch(getAllBurgers());
  }, []);
  // {foods.map((menuItem) => (  foods yazan yeri burgers yaptık artık ordan geliyor.
  return (
    <div>
      <div className="row">
        {burgers.map((menuItem) => (
          <div className="col-md-4">
            <MenuList menu={menuItem} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
