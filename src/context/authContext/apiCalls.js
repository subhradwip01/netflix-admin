import axios from "axios";
import { api } from "../../config";
import { loginStart, loginSuccess, loginFailure } from "./AuthActions";
export const login = async (user, dispatch) => {
  dispatch(loginStart());
  console.log("Started")
  try {
    const res = await api.post("/auth/login", user);
    res.data.userInfo.isAdmin
      ? dispatch(loginSuccess(res.data.userInfo))
      : dispatch(loginFailure("You are not allowed to access admin panel"));
  } catch (error) {
    console.log(error)
    dispatch(
      loginFailure(
        error.response.data.message || "Unable to login! Please try again later"
      )
    );
  }
};
