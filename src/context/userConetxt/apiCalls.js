import axios from "axios";
import { api } from "../../config";
import {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  createUserStart,
  createUserSuccess,
  createUserFailuer,
  upadteUserFailuer,
  upadteUserStart,
  upadteUserSuccess,
} from "./UserActions";

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());

  try {
    const res = await api.get("/users", {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    });
    console.log(res.data.users)
    dispatch(getUsersSuccess(res.data.users));
  } catch (error) {
    dispatch(getUsersFailure(error.response.data.message || "Unable to Get the users!"));
    console.log(error);
  }
};

export const deleteUser = async (dispatch, id) => {
  dispatch(deleteUserStart());
  try {
    await api.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (error) {
    dispatch(deleteUserFailure(error.response.data.message || "Unable to delete! Please try again later"));
  }
};

// add movie
export const createUser = async (dispatch, u,naviagte) => {
  dispatch(createUserStart());
  try {
    const res = await api.post('/auth/signup', u, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    });
    dispatch(createUserSuccess(res.data.userDetails));
    naviagte("/users")
  } catch (error) {
    dispatch(createUserFailuer(error.response.data.message || "Unable to create! Please try again later"));
  }
};

export const upadateUser= async (dispatch,u,navigate)=>{
  try {
    dispatch(upadteUserStart());
    
    const res=await api.put(`/users/${u._id}`,u, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    });
    dispatch(upadteUserSuccess(res.data.userInfo));
    navigate("/users");
  } catch (error) {
    dispatch(upadteUserFailuer(error.response.data.message || "Unable to update! Please try again later"))
  }
}