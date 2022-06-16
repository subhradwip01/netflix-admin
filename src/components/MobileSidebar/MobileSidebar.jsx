import React from 'react'
import { Settings, LineStyle, TrendingUp, Timeline, PersonOutline, Slideshow, ExitToApp } from '@material-ui/icons';
import "./MobileSidebar.css"
import { NavLink } from 'react-router-dom';
const MobileSidebar = ({showMobileSidebar,onShow}) => {
    return (
        <div className={`mobileSidebar ${showMobileSidebar ? "showMobileMenu" :""}`}>
            <div className='mobileSidebarWrappper'>
                <div className='mobileSidebarTop'>
                    <div className='mobileSidebarMenu'>
                        <h3 className='mobileSidebarTitle'>Dashboard</h3>
                        <ul className='mobileSidebarList'>
                            <li className="mobileSidebarListItem">
                                <NavLink to="/" className={(isActive) => isActive.isActive && "active"} onClick={onShow} ><LineStyle className="mobileSidebarIcon" />Home</NavLink>
                            </li>
                            <li className="mobileSidebarListItem">
                                <Timeline className="mobilemobileSidebarIcon" />Analytics
                            </li>
                            <li className="mobileSidebarListItem">
                                <TrendingUp className="mobilemobileSidebarIcon" />Sales
                            </li>
                        </ul>
                    </div>
                    <div className='mobileSidebarMenu'>
                        <h3 className='mobileSidebarTitle'>Quick Menu</h3>
                        <ul className='mobileSidebarList'>
                            <li className="mobileSidebarListItem">
                                <NavLink exact to="/users" className={(isActive) => isActive.isActive && "active"} onClick={onShow}><PersonOutline className="mobileSidebarIcon" />Users</NavLink>
                            </li>
                            <li className="mobileSidebarListItem">
                                <NavLink eaxct to="/movies" className={(isActive) => isActive.isActive && "active"} onClick={onShow}><Slideshow className="mobileSidebarIcon" />Movies</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mobileSidebarBottom'>
                    <ul className='mobileSidebarList'>
                        <li className="mobileSidebarListItem" style={{"borderTop":"1px solid grey"}}>
                            <NavLink exact to="/setting" className={(isActive) => isActive.isActive && "active"} onClick={onShow}><Settings className="mobileSidebarIcon" />Settings</NavLink>
                        </li>

                        <li className="mobileSidebarListItem imgae">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="profilepic" className='mobileSidebarAvatar' /> Subhradwip

                        </li>
                        <li className="mobileSidebarListItem">
                            <button className='mobileSidebarLogoutButton'><ExitToApp className="mobileSidebarIcon"/>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default MobileSidebar