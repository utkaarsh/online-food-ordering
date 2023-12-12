import { useState } from "react"
import logo from "../assets/restaurant-logo.png"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header=()=>{
    const [logBtn,setLogBtn]=useState("Log in")
    const onlineStatus=useOnlineStatus();

    return(
        <div className="header">
            <div className="img-logo">
            <img className="logo" src={logo} alt="image" />
            <h1 className="header-text" >ONLINE MENU</h1>
            </div>
            <div className="nav-items">
                 <ul>
                    <li>{onlineStatus? "🟢":"🔴"}</li>
                    <li>
                        <Link className="no-underline" to="/">Home</Link></li>
                    <li>
                        <Link className="no-underline" to="/about">About us</Link>
                    </li>
                    <li>
                        <Link className="no-underline" to="/contact">Contact us</Link>
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