import React from 'react'
import "./HamMenu.css"

const HamMenu = ({showMenu}) => {
    return (
        <div className={`menu-btn ${showMenu ? 'open' : ''}`} >
            <div className="menu-btn__burger cursor-pointer"></div>
        </div>
    )
}

export default HamMenu