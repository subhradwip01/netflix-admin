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
    dispatch(getUsersFailure(error.response.data.message || "Unable to Get the users!"));
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
    dispatch(deleteUserFailure(error.response.data.message || "Unable to delete! Please try again later"));
  }
};

// add movie
export const createUser = async (dispatch, u,naviagte) => {
  dispatch(createUserStart());
  console.log("Inside api")
  try {
    const res = await axios.post('/auth/signup', u, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    });
    console.log(res.data.userDetails)
    dispatch(createUserSuccess(res.data.userDetails));
    naviagte("/users")
  } catch (error) {
    // console.log(error.response.data.message)
    dispatch(createUserFailuer(error.response.data.message || "Unable to create! Please try again later"));
  }
};

export const upadateUser= async (dispatch,u,navigate)=>{
  try {
    dispatch(upadteUserStart());
    
    const res=await axios.put(`/users/${u._id}`,u, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    });
    console.log(res.data)
    dispatch(upadteUserSuccess(res.data.userInfo));
    navigate("/users");
  } catch (error) {
    console.log(error.response.data.message)
    dispatch(upadteUserFailuer(error.response.data.message || "Unable to update! Please try again later"))
  }
}