
import {React, Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import RestaurantMenuPage from "./components/RestaurantMenuPage";
import { Provider } from "react-redux";
import appStore from "./utils/store/AppStore";
import Cart from "./components/Cart";


const About= lazy(()=>import("./components/About"))

const App =()=>{
    return(
        <Provider store={appStore}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </Provider>
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
            },
            {
                path:"/cart",
                element:<Cart />
            }
        ]
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);   
