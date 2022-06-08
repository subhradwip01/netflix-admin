import React from 'react'
import "./Sidebar.css"
import {LineStyle,TrendingUp,Timeline,PersonOutline,Slideshow
} from '@material-ui/icons';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
               <h3 className='sidebarTitle'>Dashboard</h3>
               <ul className='sidebarList'>
                <li className="sidebarListItem">
                    <LineStyle className="sidebarIcon"/>Home
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
                    <PersonOutline className="sidebarIcon"/>Users
                </li>
                <li className="sidebarListItem">
                    <Slideshow className="sidebarIcon"/>Movies
                </li>
               </ul> 
            </div>
        </div>
    </div>
  )
}

export default Sidebar