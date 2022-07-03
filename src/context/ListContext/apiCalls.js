import axios from "axios";
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
} from "./ListAction";

export const getLists = async (dispatch) => {
    console.log(JSON.parse(localStorage.getItem("user")).token)
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
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
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/lists/add", list, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    // console.log(res.data)
    dispatch(createListSuccess(res.data.list));
  } catch (err) {
    dispatch(createListFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("/lists/" + id, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};

export const updateList= async (dispatch,list,token)=>{
  try {
    dispatch(updateListStart());
    const res=await axios.put("/lists/"+list._id,list,{
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      }
    })
    dispatch(updateListSuccess(res.data.updatedList))
  } catch (error) {
    
  }
    
}