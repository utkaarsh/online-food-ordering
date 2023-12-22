
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import React,{ useState } from "react";
import ShimmerUIList from "./ShimmerUIList";

const RestaurantMenuPage=()=>{
const [showIndex,setShowIndex]=useState(0);    
const {resId}=useParams();
const resInfo=useRestaurantMenu(resId);
const resData=resInfo?.data.cards[0].card.card.info;
const categories=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory").map(res=>res.card.card);
const category2=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory").map(res=>res.card.card);
//  const recommended=resInfo?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(c=>c.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory").map(res=>res.card.card.itemCards[0].card.info);
// console.log("Info",resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
// console.log("Else ",resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"));   
// console.log("categories 1",categories.length)
// console.log("categories 2",category2.length)
   
  return resInfo==null?(<ShimmerUIList />): (
        <div className="menu text-center">
            <h1 className="text-2xl my-6"><b>{resData?.name}</b></h1>
            <h3 className="font-bold text-lg">{resData?.cuisines.join(", ")} - {resData?.costForTwoMessage}</h3>
            <h2 className="py-2 font-bold">Menu</h2>
            {categories.length!==0?categories?.map((category,index)=>(
                //controlled component
            <RestaurantCategory key={category?.title} data={category} showExpand={index===showIndex?true:false} 
            setShowIndex={()=>
                setShowIndex(index)
            } />
            ))
            : category2?.map((category,index)=>(
                //controlled component
            <RestaurantCategory key={category?.title} data={category} showExpand={index===showIndex?true:false} 
            setShowIndex={()=>
                setShowIndex(index)
            } />
            ))
                
            }

        </div>
    )
}
export default React.memo(RestaurantMenuPage);