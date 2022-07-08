import axios from "axios";
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
    const res = await axios.get("/users", {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    });
    console.log(res.data.users)
    dispatch(getUsersSuccess(res.data.users));
  } catch (error) {
    dispatch(getUsersFailure());
    console.log(error);
  }
};

export const deleteUser = async (dispatch, id) => {
  dispatch(deleteUserStart());
  console.log(id);
  try {
    await axios.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (error) {
    dispatch(deleteUserFailure());
  }
};

// add movie
export const createUser = async (dispatch, u) => {
  dispatch(createUserStart());
  console.log("Inside api")
  try {
    const res = await axios.post('/auth/signup', u, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    });
    
    dispatch(createUserSuccess(res.data.userDetails));
  } catch (error) {
    console.log(error)
    dispatch(createUserFailuer());
  }
};

export const upadateUser= async (dispatch,u)=>{
  try {
    dispatch(upadteUserStart());
    const res=await axios.put(`/users/${u._id}`,u, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    });
    dispatch(upadteUserSuccess(res.data.updatedUser));
  } catch (error) {

    dispatch(upadteUserFailuer(error))
  }
}