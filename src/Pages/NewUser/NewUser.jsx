import React,{useContext,useState} from 'react'
import "./NewUser.css"
import { Publish } from '@material-ui/icons'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase";
import { UserContext } from '../../context/userConetxt/UserContext';
import { createUser } from '../../context/userConetxt/apiCalls';
import {useNavigate} from "react-router-dom"

const NewUser = () => {
  const [userdata,setUserData]=useState({
    username:"",
    email:"",
    password:"",
    isAdmin:"",
    profilePic:""
  });
  const [img,setImg]=useState(null);
  const [uploaded,setUploaed]=useState(false);
  const {dispatch,isFetching,error}=useContext(UserContext)
  const navigate=useNavigate();
  const userInputHandler=(e)=>{
    setUserData({...userdata,[e.target.name]:e.target.value})
  }
  const profilePicHandler=(e)=>{
    setImg(e.target.files[0])
  }
  
 const uploadHandler=(e)=>{
  e.preventDefault();
  const filename=new Date().getTime() + img.name
      const bucketRef = ref(storage, `profiles/${filename}`);
      const uploadTask = uploadBytesResumable(bucketRef, img);
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
            setUserData((prev) => ({ ...prev, profilePic: url }));
            setUploaed(true)
          });
        }
      );
 }

 const createUserHandler= async (e)=>{
    e.preventDefault();
    console.log(userdata);
    if(userdata.email==="" || userdata.password==="" || userdata.username===""){
      alert("Enter All Field");
      return;
    }
    await createUser(dispatch,userdata);
 }

  // if(!error.has){
  //  return navigate("/users")
  // }
console.log(error.message)
  return (
    <div className='newUser'>
        {
        error.has && (
          <div className="errMsg">{ error.message }</div>
        )}
        <h1 className="newUserTitle">New User</h1>
        <form className='newUserFormContainer'>
        <div className="newUserForm"> 
        <div className="newUserFormLeft">
           <div className='newUserItem'>
            <label htmlFor='username'>Username</label>
            <input type="text" name="username" id="username" placeholder='eg. jhon123' value={userdata.username} onChange={userInputHandler}/>
           </div>
           <div className='newUserItem'>
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="email" placeholder='eg. jhon@gmail.com' value={userdata.email} onChange={userInputHandler}/>
           </div>
           <div className='newUserItem'>
            <label htmlFor='password'>Password</label>
            <input type="password" name="password" id="password" placeholder='eg. jhon@gmail.com' value={userdata.password} onChange={userInputHandler}/>
           </div>
           <div className='newUserItem'>
            <label htmlFor='admin'>Admin</label>
            <select className="newUserAdminSelect" id="admin" name="isAdmin" onChange={userInputHandler}>
                <option>Select Admin or Not</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
           </div>
           </div>
           <div className='newUserFormRight'>
           <div className='newUserImage'>
          {img && <img
                  className="userUpdateImg"
                  style={{ width: "100px", height: "100px", borderRadius: "10px", objectFit: "cover cover", marginBottom: "10px" }}
                  src={URL.createObjectURL(img)}
                  alt=""
                  
                />}
                <label htmlFor="file">
                  <Publish className="userNewIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} onChange={profilePicHandler}/>
                </div>
           </div>
           </div> 
           {img && !uploaded ? <button className="userCreateButton" onClick={uploadHandler}>Upload</button>
           : <button className="userCreateButton" onClick={createUserHandler} disabled={isFetching}>Create</button>}
        </form>
    </div>
  )
}

export default NewUser