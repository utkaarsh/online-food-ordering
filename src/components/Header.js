import { useState } from "react"
import logo from "../assets/restaurant-logo.png"
import { Link } from "react-router-dom"

const Header=()=>{
    const [logBtn,setLogBtn]=useState("Log in")
    return(
        <div className="header">
            <div className="img-logo">
            <img className="logo" src={logo} alt="image" />
            <h1 className="header-text" >REMOTE MENU</h1>
            </div>
            <div className="nav-items">
                 <ul>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        setLogBtn("Log out")
                        if(logBtn=="Log out"){
                            setLogBtn("Log in")
                        }
                    }}> <b>{logBtn}</b></button>
                 </ul>
            </div>
        </div>
    )
}

export default Header;