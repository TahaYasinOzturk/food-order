//ilk olarak parametre alıp bu deistikce kendini yeniler hem parametreyi hem action dinler
// state={burgers:[]}, action bos dizi yaptık ...state, bu yüzden ... state yazdik gelen veri ile dolacak. burgers ı köfteler yaptık export const getAllBurgersReducer = (state = { burgers: [] }, action) => {  sonra asagıda case "GET_BURGERS_SUCCESS":       return {        loading: false,         köfteler: action.payload,       };
//homepage de burgers lari köfteler yaptık state e isim verdik köfteler diye ve onun icini doldurduk react dev tooldan görebilirisn köfteler yazisini.
//Not: ilk durumda baslangıcta bos arrya olmaılı yoksa undined hatasi alırsın. baslangıc arrayi atadik.
// ilki state dir 2. paraametre action dir. reducrlarin.
//action.type i algılar ve payloadini yakalar. payload da response.data verisi vardır. burgers verisinde datalarmiz duruyordur simdi.

// hompage de use slector ile cekiyoruz obje dönüyor. stateiin icinde   bu cektigimizin icindekileri dedustruction yaptık ve icindeki istedigklerimi aldık.
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

//sıra8:)ADD_BURGERS_SUCCESS  tutucagımız bisi olmadıgı icin succes true yazdık action payload yapmadık.burgersROutea gittik

export const addBurgersReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_BURGERS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_BURGERS_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_BURGERS_FAILED":
      return {
        loading: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

//sıra15: tek bir deger döncek id ye göre onu kullanıcaz. (state = { burger: null } yerine {  } da olabilir.
export const getBurgerByIdReducer = (state = { burger: null }, action) => {
  switch (action.type) {
    case "GET_BURGER_BY_ID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_BURGER_BY_ID_SUCCESS":
      return {
        loading: false,
        success: true,
        burger: action.payload,
      };
    case "GET_BURGER_BY_ID_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
