import { useEffect, useState } from "react";
import { MENU_API, proxy } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenuPage=()=>{
  const {resId}=useParams();
  const resInfo=useRestaurantMenu(resId);
 const menuData=useRestaurantMenu(resId);
 const cat1=useRestaurantMenu(resId)
  
  
  console.log("menu data:",menuData);
   

   
  return resInfo==null?(<ShimmerUI />): (
        <div className="menu">
            <h1>{resInfo.name}</h1>
            <h2>Menu</h2>
            <ul>
            {menuData?.map((res,index) =>(
                    <li key={index}>{res?.name} </li>
               ))}
            </ul>

            <ul>
            {cat1?.map((res,index) =>(
                    <li key={index}>{res.name} </li>
               ))}
            </ul>
            
        </div>
    )
}
export default RestaurantMenuPage;