import React, { lazy ,Suspense, useEffect, useState,Provider} from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider, Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";



const Grocery = lazy(()=>import("./components/Grocery"));

const About = lazy(()=>import("./components/About"));

const Applayout = () => {
const [userName, setUserName]=useState("");

useEffect(()=>{
    const data={
      name:"Ashish Jha",
    };
    setUserName(data.name);
  }
,[]);

 return(
  <Provider store={appStore}>
  <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
 <div className="app">
    <Header />
    <Outlet/>
  </div> 
  </UserContext.Provider>
  </Provider>


 ) 
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element:<Suspense fallback={<h1>Loading.......</h1>}><About /></Suspense> ,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart/",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h1>Loading.......</h1>}><Grocery /></Suspense> ,
      }
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
