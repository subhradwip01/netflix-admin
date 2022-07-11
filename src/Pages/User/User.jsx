import React,{useState} from 'react'
import "./User.css"
import { Publish, PersonOutline, MailOutline, EventAvailable, SupervisorAccount } from "@material-ui/icons"
import { Link, useLocation,useNavigate } from "react-router-dom"
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
  const [uploading,setUploading]=useState(false);
  const [uploaded,setUploaded]=useState(false);
  const {dispatch,isFetching,error}=useContext(UserContext);
  const navigate=useNavigate();
  const uploadHandler=(e)=>{
        e.preventDefault()
        setUploading(true);
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
              setUploading(false);
              setUploaded(true);
            });
          }
        );
   }
   const inputHandler=(e)=>{
    
    setFormData(p=>({...p,[e.target.name]:e.target.value}));
    console.log(formData)
   }
   const updateHandler=async(e)=>{
    e.preventDefault();
    console.log(formData);
    await upadateUser(dispatch,formData,navigate)
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
          <span className='userUpdateTtile'>Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  className={error.has && error.message.username ? "userUpdateInput errInput" : "userUpdateInput"}
                  placeholder={formData.username}
                  value={formData.username}
                  onChange={inputHandler}
                  name="username"

                />
                {error.has && error.message.username && <small className='err'>{error.message.username}</small>}
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={formData.email}
                  value={formData.email}
                  className={error.has && error.message.email ? "userUpdateInput errInput" : "userUpdateInput"}
                  onChange={inputHandler}
                  name="email"
                />
                {error.has && error.message.email && <small className='err'>{error.message.email}</small>}
              </div>
              <div className="userUpdateItem">
                <label>Admin</label>
                <select name="isAdmin" value={formData.isAdmin} onChange={inputHandler}>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
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
                <input type="file" id="file" style={{ display: "none" }} onChange={(e)=>{setNewImg(e.target.files[0]);setUploaded(false)}}/>
              </div>
              {newImg && !uploaded ? <button className="userUpdateButton" onClick={uploadHandler} disabled={uploading}>{uploading? "Updloading..." :"Upload"}</button>
              : <button className="userUpdateButton" onClick={updateHandler} disabled={isFetching}>{isFetching? "Updating..." :"Update"}</button>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User