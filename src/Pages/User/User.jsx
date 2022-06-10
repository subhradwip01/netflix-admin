import React from 'react'
import "./User.css"
import {Publish, PersonOutline, MailOutline, EventAvailable,SupervisorAccount} from "@material-ui/icons"
const User = () => {
  return (
    <div className='user'>
      <div className='userHeaderContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" srcset="" className='userShowImage' />
            <h3 className='userShowUsername'>Subhradwip Kulavi</h3>
          </div>
          <div className="userShowBottom">
            <h4 className='userAccoutDetails'>Account Details</h4>
            <div className="userShowInfo">
              <span className='userShowInfoTtile'>
                <PersonOutline />Username: </span>Subhradwip
            </div>
            <div className="userShowInfo">
              <span className='userShowInfoTtile'>
                <MailOutline />Email</span>abs@gmail.com
            </div>
            <div className="userShowInfo">
              <span className='userShowInfoTtile'>
                <EventAvailable />CreatedAt: </span>12/12/12
            </div>
            <div className="userShowInfo">
              <span className='userShowInfoTtile'>
                <SupervisorAccount />Admin: </span>False
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
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              
              
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  style={{width:"100px",height:"100px",borderRadius:"10px",objectFit:"cover cover",marginBottom:"10px"}}
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User