import React, { useState } from 'react'
import NavApi from './NavApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'


const NavBar = () => { 
    const[menuBtn,setMenuBtn]=useState(false)

    const navbarHandler=()=>{
        setMenuBtn(!menuBtn)
    }

    return (
        <>
            <div className="navbar">
                <div className="max-width m-auto d-flex">
                    <div className="logo"><NavLink to="/">Port<span>Folio</span></NavLink></div>
                    <div className= "menu" id={menuBtn ? "hidden" : ''}>
                    {/* <div className="menu" id="hidden"> */}
                        <ul>
                            {NavApi.map((val) => {
                                return (
                                    <li>
                                        <NavLink key={val.id} activeClassName="menu-active" to={val.path} onClick={navbarHandler}>{val.menu} </NavLink> </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="menu-btn" >
                        < FontAwesomeIcon icon={menuBtn ? "times" : "bars"} onClick={navbarHandler}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
