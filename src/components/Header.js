import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{

    const [loginbtnText, setLoginBtnText]=useState("Login");
    const data =useContext(UserContext);
    const onlineStatus=useOnlineStatus();

    // Subscribe to the store using Selector

    const cartItem = useSelector((store)=>store.cart.items);
   
  return  (
  <div className="flex justify-between shadow-lg bg-pink-100 m-2">
    <div className="flex">
        <img  className="w-20" src={LOGO_URL} alt="logo" />
      </div>

      <div className="nav-items justify-between align-middle">
        <ul className="flex  m-4">
          <li  className="mx-4  hover:bg-pink-400 px-4 py-2" >online status : {onlineStatus?"🟢":"🔴"}</li>
            <li className=" hover:bg-pink-400  " ><Link className=" px-4 py-2  block"  to="/">Home</Link></li>
            <li  className="mx-4  hover:bg-pink-400 " ><Link className=" px-4 py-2  block" to="/about">About Us</Link></li>
            <li  className="mx-4  hover:bg-pink-400 " ><Link className=" px-4 py-2  block"  to="/contact">Contact Us</Link></li>
            <li  className="mx-4  hover:bg-pink-400" ><Link className=" px-4 py-2  block" to="/grocery">Grocery </Link></li>
            <li  className="mx-4 font-bold  hover:bg-pink-400" ><Link className=" px-4 py-2  block" to="/cart">Cart { cartItem.length }</Link></li>
            <button className="loginbtn" onClick={()=>{
              if(loginbtnText==="Login"){
                setLoginBtnText("Log Out");
              }else{
                setLoginBtnText("Login");
              }
             
            }}>{loginbtnText}</button>

              <li  className="mx-4  hover:bg-pink-400 px-4 py-2 font-bold" >{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
)
          }

export default Header;