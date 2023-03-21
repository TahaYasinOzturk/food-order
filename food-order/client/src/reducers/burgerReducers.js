//ilk olarak parametre alıp bu deistikce kendini yeniler hem parametreyi hem action dinler
// state={burgers:[]}, action bos dizi yaptık ...state, bu yüzden ... state yazdik gelen veri ile dolacak. burgers ı köfteler yaptık export const getAllBurgersReducer = (state = { burgers: [] }, action) => {  sonra asagıda case "GET_BURGERS_SUCCESS":       return {        loading: false,         köfteler: action.payload,       };
//homepage de burgers lari köfteler yaptık state e isim verdik köfteler diye ve onun icini doldurduk react dev tooldan görebilirisn köfteler yazisini.

export const getAllBurgersReducer = (state = { burgers: [] }, action) => {
  switch (action.type) {
    case "GET_BURGERS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_BURGERS_SUCCESS":
      return {
        loading: false,
        burgers: action.payload,
      };
    case "GET_BURGERS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
