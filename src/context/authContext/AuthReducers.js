const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: {
          has: false,
          message: "",
        },
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("user",JSON.stringify(action.payload))
      return {
        user: action.payload,
        isFetching: false,
        error: {
          has: false,
          message: "",
        },
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: {
          has: true,
          message: action.payload,
        },
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: {
          has: false,
          message: "",
        },
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
