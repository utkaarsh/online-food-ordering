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
    const data = await fetch(proxy+MENU_API+resId);
    const json=await data.json();
    const resData=json.data.cards[0].card.card.info;
    const menuData=json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1]?.card.card.itemCards;
    const menuData2=json.data.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[2]?.card.card.itemCards?.map(res=>res.card.info);
    setResInfo(resData);
    setMenuData(menuData)
    setCat1(menuData2);
    console.log("MenuData",menuData);
    console.log("RES INFO",json.data.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[2]?.card.card.itemCards?.map(res=>res.card.info));
    }
    return resInfo,menuData,cat1
}
export default useRestaurantMenu;