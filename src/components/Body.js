import RestaurantCard from "./RestaurantCard";
import { hotels } from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const apiUrl="https://crossorigin.me?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.533117461252107&lng=73.82439438253641&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// const apiURL=  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";


const Body=()=>{
    const [serachText,setSerachText]=useState("");
    const [listedRestaurants,setListedRestaurants]=useState([]);
    const [filteredList,setFilteredList]=useState();
    
    
useEffect(()=>{
        setTimeout(fetchData,1000)
    },[])
    const fetchData= ()=>{
        try {
            // const data=await fetch(apiUrl);
            // const json=await data.json();
            console.log("hotels :",hotels[0].data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
            const resData=hotels[0].data.cards[2].card.card.gridElements.infoWithStyle.restaurants
            // console.log("TRACK::",hotels.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
             setListedRestaurants(resData);
             setFilteredList(resData);  
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        
    };

    const onlineStatus=useOnlineStatus();
    console.log("online status :",onlineStatus);
    if(onlineStatus===false) 
    return(
         <h1>Looks like you're offline, Please check your internet connection</h1>
         );

    return listedRestaurants.length===0? <ShimmerUI /> :(
        <div className="body">
            <div className="search flex items-center">

                <div className="flex flex-wrap items-center m-4 px-2 ">
                    <input className=" border border-black border-solid h-8 rounded-lg p-2" type="text" placeholder="search restaurant" value={serachText} onChange={(e)=>{
                        setSerachText(e.target.value)
                    }}/>
                    <button className="flex items-center m-4 p-4 border border-black  h-8 w-24 rounded-lg bg-green-100" onClick={()=>{
                        const filteredRes=listedRestaurants.filter(res=>res.info.name.toLowerCase().includes(serachText.toLowerCase()));
                        setFilteredList(filteredRes)
                    }} >search</button>
                </div>

                {/* <button className="filter-btn m-4 p-4 rounded-lg h-8  flex items-center border border-black border-solid bg-gray-100" onClick={()=>{
                    listFiltered=listedRestaurants.filter(res=>res.info.avgRating >= 4)
                    setListedRestaurants(listFiltered);
                    console.log("Filtered Sir !!",listFiltered);
                }}>
                    Top rated restaurants
                </button>  */}
            {/* <div className="go-back">
                <button onClick={()=>{
                    normalList=listedRestaurants.filter(res=>res.info);
                    console.log("Hitted Gp back to all");
                    setListedRestaurants(normalList)
                }}>All restaurants</button>
            </div> */}
            </div>
            <div className="container">
               <div className="res-container flex flex-wrap justify-center">
               {
               filteredList?.map((res)=>(
                <Link className="no-underline" key={res.info.id} to={"/restaurants/"+res.info.id}><RestaurantCard  resData={res}/></Link>
                ))
               }  
               </div>
            </div>
        </div>
    )
}

export default Body;