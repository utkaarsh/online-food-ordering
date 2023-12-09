import { useEffect, useState } from "react";
import { MENU_API, proxy } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
const RestaurantMenuPage=()=>{
  const [resInfo,setResInfo]=useState(null);
  const [menuData,setMenuData]=useState(null);
  const [cat1,setCat1]=useState(null);
  
  const {resId}=useParams();
  console.log("resId:",resId);
    useEffect(()=>{
    fetchMenu();
  },[])

  const fetchMenu=async()=>{
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
    // console.log("Menu Data ::",json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map(res=>res.card.info));
  }
   
  return resInfo==null?(<ShimmerUI />): (
        <div className="menu">
            <h1>{resInfo.name}</h1>
            <h2>Menu</h2>
            <ul>
            {menuData?.map((res,index) =>(
                    <li key={index}>{res.card.info.name} </li>
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