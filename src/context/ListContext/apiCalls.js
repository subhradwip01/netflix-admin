import axios from "axios";
import { api } from "../../config";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
  updateListStart,
  updateListSuccess,
  updateListFailure
} from "./ListAction";

export const getLists = async (dispatch) => {
    console.log(JSON.parse(localStorage.getItem("user")).token)
  dispatch(getListsStart());
  try {
    const res = await api.get("/lists", {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    // console.log(res.data.list)
    dispatch(getListsSuccess(res.data.list));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createList = async (list, dispatch,naviagte) => {
  dispatch(createListStart());
  try {
    const res = await api.post("/lists/add", list, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    // console.log(res.data)
    dispatch(createListSuccess(res.data.list));
    naviagte("/lists")
  } catch (err) {
    dispatch(createListFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await api.delete("/lists/" + id, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};

export const updateList= async (dispatch,list,naviagte)=>{
  try {
    dispatch(updateListStart());
    const res=await api.put("/lists/"+list._id,list,{
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      }
    })
    dispatch(updateListSuccess(res.data.updatedList))
    naviagte("/lists")
  } catch (error) {
    dispatch(updateListFailure("Unable to update list"))
  }
    
}