
import {React, Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import ContactUs from "./components/ContactUs";
import RestaurantMenuPage from "./components/RestaurantMenuPage";

const About= lazy(()=>import("./components/About"))

const App =()=>{
    return(
        <div className="app">
            <Header />
            <Outlet />
          
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:"/",
                element:<Body />
            }
            ,
            {
                path:"/about",
                element:(<Suspense fallback={<h1>Loading ...</h1>}> <About /> </Suspense>) 
            },
            {
                path:"/contact",
                element:<ContactUs /> 
            },
            {
                path:"restaurants/:resId",
                element:<RestaurantMenuPage />
            }
        ]
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);   
