// // sonra store gittik //23.03 error kismini ekledik kontrol icin.
export const registerUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
        error: false,
        users: action.payload,
      };
    case "USER_REGISTER_FAILED":
      return {
        loading: false,
        success: false,
        error: true,
      };

    default:
      return state;
  }
};

//LOGIN girişi icin reducer

//  23.03 diziye ihtiyac yok burda state {} .  local storagen gelecek bilgiler burası sadece succes mi deil mi current user i tutucak sadece bunun amacı budur. store js e gidiyoruz.
export const loginUserReducer = (state = { currentUser: null }, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        loading: true,
        success: false,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        loading: false,
        success: true,
        currentUser: action.payload,
      };
    case "USER_LOGIN_FAILED":
      return {
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
