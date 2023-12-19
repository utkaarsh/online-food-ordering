import { useEffect, useState } from "react";
import { MENU_API,proxy } from "./constants";
const useRestaurantMenu =(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    const [menuData,setMenuData]=useState(null);
    const [cat1,setCat1]=useState(null);
    
    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async()=>{
    const data = await fetch(MENU_API+resId);
    const json=await data.json();
    setResInfo(json);
    }
    return resInfo;
}
export default useRestaurantMenu;