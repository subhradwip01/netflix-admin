import React from 'react'
import "./Sidebar.css"
import {LineStyle,TrendingUp,Timeline,PersonOutline,Slideshow,FormatListBulleted

} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
               <h3 className='sidebarTitle'>Dashboard</h3>
               <ul className='sidebarList'>
                <li className="sidebarListItem">
                    <NavLink to="/" className={(isActive)=>isActive.isActive  && "active"}><LineStyle className="sidebarIcon"/>Home</NavLink>
                </li>
                <li className="sidebarListItem">
                    <Timeline className="sidebarIcon"/>Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcon"/>Sales
                </li>
               </ul> 
            </div>
            <div className='sidebarMenu'>
               <h3 className='sidebarTitle'>Quick Menu</h3>
               <ul className='sidebarList'>
                <li className="sidebarListItem">
                    <NavLink exact to="/users" className={(isActive)=>isActive.isActive && "active"}><PersonOutline className="sidebarIcon"/>Users</NavLink>
                </li>
                <li className="sidebarListItem">
                    <NavLink eaxct to="/movies" className={(isActive)=>isActive.isActive  && "active"}><Slideshow className="sidebarIcon"/>Movies</NavLink>
                </li>
                <li className="sidebarListItem">
                    <NavLink eaxct to="/lists" className={(isActive)=>isActive.isActive  && "active"}><FormatListBulleted className="sidebarIcon"/>List</NavLink>
                </li>
               </ul> 
            </div>
        </div>
    </div>
  )
}

export default Sidebar