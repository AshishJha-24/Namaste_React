import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{

    const [loginbtnText, setLoginBtnText]=useState("Login");
    const onlineStatus=useOnlineStatus();

  return  (<div className="header">
    <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>online status : {onlineStatus?"🟢":"🔴"}</li>
            <li><Link  to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery </Link></li>
            <li>Cart</li>
            <button className="loginbtn" onClick={()=>{
              if(loginbtnText==="Login"){
                setLoginBtnText("Log Out");
              }else{
                setLoginBtnText("Login");
              }
             
            }}>{loginbtnText}</button>
        </ul>
      </div>
    </div>
)
          }

export default Header;