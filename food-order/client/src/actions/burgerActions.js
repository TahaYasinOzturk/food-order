import axios from "axios";

// ilk dispatch işlemi baslatan req atan sonra atıldı diyor sonra basarılı yada error olarak dönüyor try catch icinden gelen cevplar.
export const getAllBurgers = () => async (dispatch) => {
  dispatch({ type: "GET_BURGERS_REQUEST" });
  try {
    const response = await axios.get("http://localhost:4000/getFoods");

    dispatch({ type: "GET_BURGERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_BURGERS_FAILED", payload: error });
  }
};
