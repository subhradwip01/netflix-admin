import React from 'react'
import "./NewUser.css"
import { Publish } from '@material-ui/icons'

const NewUser = () => {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">New User</h1>
        <form className='newUserForm'>
        <div className="newUserFormLeft">
           <div className='newUserItem'>
            <label htmlFor='username'>Username</label>
            <input type="text" name="username" id="username" placeholder='eg. jhon123'/>
           </div>
           <div className='newUserItem'>
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="email" placeholder='eg. jhon@gmail.com'/>
           </div>
           <div className='newUserItem'>
            <label htmlFor='password'>Password</label>
            <input type="password" name="email" id="email" placeholder='eg. jhon@gmail.com'/>
           </div>
           <div className='newUserItem'>
            <label htmlFor='admin'>Admin</label>
            <select className="newUserAdminSelect" id="admin" name="admin">
                <option>Select Admin or Not</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
           </div>
            <button className="userCreateButton">Create</button>
           </div>
           <div className='newUserFormRight'>
           <div className='newUserImage'>
           <img
                  className="userUpdateImg"
                  style={{ width: "100px", height: "100px", borderRadius: "10px", objectFit: "cover cover", marginBottom: "10px" }}
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userNewIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
                </div>
           </div>

        </form>
    </div>
  )
}

export default NewUser