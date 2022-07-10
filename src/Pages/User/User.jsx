import React,{useState} from 'react'
import "./User.css"
import { Publish, PersonOutline, MailOutline, EventAvailable, SupervisorAccount } from "@material-ui/icons"
import { Link, useLocation } from "react-router-dom"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase";
import { useContext } from 'react';
import { UserContext } from '../../context/userConetxt/UserContext';
import { upadateUser } from '../../context/userConetxt/apiCalls';
const User = () => {
  const {state}=useLocation();
  const user=state.user;
  // console.log(user)
  const [formData,setFormData]=useState({...user}||null)
  const [newImg,setNewImg]=useState(null);
  const {dispatch,isFething,error}=useContext(UserContext);
  const uploadHandler=()=>{
        const filename=new Date().getTime() + newImg.name
        const bucketRef = ref(storage, `profiles/${filename}`);
        const uploadTask = uploadBytesResumable(bucketRef, newImg);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               console.log("Upload is " + progress + "% done");
          },
          (err) => {
            console.log(err);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              setFormData((prev) => ({ ...prev, profilePic: url }));
            });
          }
        );
   }
   const inputHandler=(e)=>{
    setFormData(p=>({...p,[e.target.name]:e.target.value}));
   }
   const updateHandler=async(e)=>{
    e.preventDefault();
    // console.log(formData)
      if(newImg){
       uploadHandler();
      }
      await upadateUser(dispatch,formData)
   }
   
  return (
    <div className='user'>
      <div className='userHeaderContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to="/new-user">

          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img src={user.profilePic} alt="" srcset="" className='userShowImage' />
          </div>
          <div className="userShowBottom">
            <h4 className='userAccoutDetails'>Account Details</h4>
            <div className="userShowInfo">
              <span className='userShowInfoTtile'>
                <PersonOutline />Username: </span>{user.username}
            </div>
            <div className="userShowInfo">
              <span className='userShowInfoTtile'>
                <MailOutline />Email</span>{user.email}
            </div>
            <div className="userShowInfo">
              <span className='userShowInfoTtile'>
                <EventAvailable />CreatedAt: </span>{user.createdAt}
            </div>
            <div className="userShowInfo">
              <span className='userShowInfoTtile'>
                <SupervisorAccount />Admin: </span>{user.isAdmin.toString()}
            </div>
          </div>
        </div>
        <div className='userUpdate'>
        {
        error.has && (
          <div className="errMsg">{ error.message.username || error.message.email }</div>
        )}
          <span className='userUpdateTtile'>Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder={formData.username}
                  value={formData.username}
                  onChange={inputHandler}
                  name="username"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={formData.email}
                  value={formData.email}
                  className="userUpdateInput"
                  onChange={inputHandler}
                  name="email"
                />
              </div>
              <div className="userUpdateItem">
                <label>Admin</label>
                <select name="isAdmin" onChange={inputHandler}>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>


            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  style={{ width: "100px", height: "100px", borderRadius: "10px", objectFit: "cover cover", marginBottom: "10px" }}
                  src={newImg ? URL.createObjectURL(newImg) : formData.profilePic}
                  alt="logo"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} onChange={(e)=>setNewImg(e.target.files[0])}/>
              </div>
              <button className="userUpdateButton" onClick={updateHandler}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User