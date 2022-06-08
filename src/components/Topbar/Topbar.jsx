import React from 'react'
import "./topbar.css"
import {NotificationsNone,Language,Settings} from '@material-ui/icons';
const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <spna className="logo">netadmin</spna>
            </div>
            <div className='topRight'>
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="profilepic" className='topAvatar'/>
            </div>
        </div>
    </div>
  )
}

export default Topbar