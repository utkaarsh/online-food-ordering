import { useDispatch } from "react-redux";
import { CDN_IMG_URL } from "../utils/constants";
import { addItems } from "../utils/store/CartSlice";
import React from "react";

const ItemList=React.memo(({item})=>{
    console.log("ItemList rendering");
    const dispatch=useDispatch();    
    const handleItem=(item)=>{
        //Dispatching an action
        dispatch(addItems(item))
    }

    return (
        <div>
             {item?.map((p)=>(
                <div key={p.card.info.id} className=" p-3 m-4 border-gray-300 border-b-2 flex justify-between" >
                    <div className="w-9/12 p-2">
                    <div className="text-left py-2">
                    <span>{p.card.info.name}</span>
                    <span> - ₹ {p.card.info.price/100 || p.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs text-gray-500 text-left">{p.card.info.description?p.card.info.description:"Wonderful and delicious"}</p>
                    </div>

                    <div className="w-3/12 p-2 ">
                <img src={p.card.info.imageId?CDN_IMG_URL+p.card.info.imageId:"https://png.pngtree.com/element_our/20200702/ourmid/pngtree-vector-illustration-knife-and-fork-western-food-plate-image_2283844.jpg"} className=" w-[150px]  border border-gray-300 rounded-lg " alt="food-img" />
                <button className="p-2 shadow-lg bg-green-100 w-15 h-8 p-2 rounded-lg"
               onClick={
                ()=>
                handleItem(p)
                } >
                 Add + </button>
                </div>
                </div>
                ))}
        </div>
    )
})
export default ItemList;