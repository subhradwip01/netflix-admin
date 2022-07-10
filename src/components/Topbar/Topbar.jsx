
import "./topbar.css"
import {Settings,ExitToApp} from '@material-ui/icons';
import HamMenu from '../HamMenu/HamMenu';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import { useNavigate } from "react-router-dom";
const Topbar = ({mobileSidebar,onShow,showMobileSidebar}) => {
    const {onLogout} = useContext(AuthContext)
    const navigate=useNavigate()
    const logoutHandler=()=>{
        onLogout();
        navigate("/login");
    }
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <spna className="logo">netadmin</spna>
            </div>
            <div className='topRight'>
                {!mobileSidebar && <><div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="profilepic" className='topAvatar'/> 
                
                <button className='topbarLogoutButton' onClick={logoutHandler}><ExitToApp />Logout</button></>}
                {mobileSidebar && <div className="topbarIconContainer" onClick={onShow}>
                    <HamMenu showMenu={showMobileSidebar}/>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Topbar