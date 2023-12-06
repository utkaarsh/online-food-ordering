import { useState } from "react"
import logo from "../assets/restaurant-logo.png"

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
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
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