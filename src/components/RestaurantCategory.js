import * as React from 'react';
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{
console.log("INDEX",showItems);
const handleClick=()=>{
            // {showItems?setShowItems(false):setShowItems(true)} oldway
        // setShowItems(!showItems);
        setShowIndex()
    }
    if(data["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ){ return(
        <div>
            <div role="button" className="header bg-gray-100 w-6/12 mx-auto my-4 p-3 shadow-xl">
            <div className="flex justify-between" onClick={handleClick} >
            <span className="font-bold text-lg">{data.title} ({data?.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            {showItems && <ItemList item={data.itemCards} />}
        </div>
        </div>
    )}else if(data["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") {return(
        <div>
        <div role="button" className="header bg-gray-100 w-6/12 mx-auto my-4 p-3 shadow-xl">
        <div className="flex justify-between" onClick={handleClick} >
        <span className="font-bold text-lg">{data.title} ({data?.categories?.length})</span>
        <span>⬇️</span>
        </div>
        {showItems && <ItemList item={data.categories?.itemCards} />}
    </div>
    </div>
    )} else return <h2>No Data Recieved </h2>

}
export default RestaurantCategory;