import { useDispatch, useSelector } from "react-redux";
import { CDN_IMG_URL } from "../utils/constants";
// import ItemList from "./ItemList";
import { clearCart } from "../utils/store/CartSlice";
import React, { Suspense,lazy } from "react";
const ItemList= lazy(()=>import("./ItemList"))

const Cart =()=>{
    const cartItems= useSelector((store)=>store.cart.items);
    console.log("Cart Page Items ->>",cartItems);
    const dispatch=useDispatch();
    const handleClearCart = (cartItems) => {
        dispatch(clearCart(cartItems));
    }
    return(
        <div className="m-10 p-5 ">
            <h1 className="font-bold text-center text-2xl m-5">My Cart </h1>
            {cartItems.length!==0?<button className="p-2 m-2 text-white bg-black border rounded-lg " onClick={()=>handleClearCart(cartItems)}>Clear All</button>:null}
            <div className="  mt-10 mx-auto w-7/12 ">
            <Suspense fallback={<h1>Loading ...</h1>}> <ItemList item={cartItems} /> </Suspense>

            </div>
        </div>
    )
}
export default React.memo(Cart);