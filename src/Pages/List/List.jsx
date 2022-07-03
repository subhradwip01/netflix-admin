import React,{useState,useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./List.css";
import { Publish } from "@material-ui/icons";
import { updateList } from "../../context/ListContext/apiCalls";
import { ListContext } from "../../context/ListContext/ListContext";

const List=()=> {
  const location = useLocation();
  const list = location.state.list;
  const {dispatch}=useContext(ListContext)
  const [formData,setFormData]=useState(list);
  const navigate=useNavigate();
  const inputHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const updateMoviesHandler=async(e)=>{
    e.preventDefault();
    // const {_id,...updatedData}=formData;
    console.log(formData)
    await updateList(dispatch,formData)
    navigate("/lists")
  }
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" name="title" onChange={inputHandler} placeholder={list.title} />
            <label>Type</label>
            <select name="type" onChange={inputHandler}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
            <label>Genre</label>
            <input type="text" name="genre" onChange={inputHandler} placeholder={list.genre} />
          </div>
          <div className="productFormRight">
            <button className="productButton" onClick={updateMoviesHandler}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default List