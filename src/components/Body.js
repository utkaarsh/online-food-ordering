import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { apiUrl } from "../utils/constants";
// const apiURL=  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";


const Body=()=>{
    const [serachText,setSerachText]=useState("");
    const [listedRestaurants,setListedRestaurants]=useState([]);
    const [filteredList,setFilteredList]=useState();
    const[filterOn,setFilterOn]=useState(false)
   
    //HOC call 
    // const RestaurantCardPromoted=withPromoted(RestaurantCard)
    
useEffect(()=>{
        fetchData()
    },[])

const fetchData= async()=>{
        try {
            const data=await fetch(apiUrl);
            const json=await data.json();
            const hotels=json.data.cards.filter(p=>p.card?.card["@type"]==="type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget");
            const availBrands=hotels.map(p=>p.card.card.gridElements.infoWithStyle);
            const displayResList=availBrands.filter(f=>f["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle")
            const showRes=displayResList.map(p=>p?.restaurants);
            const resData=showRes[0];
            // const resData=json.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
            // const resData=hotels[0].data.cards[2].card.card.gridElements.infoWithStyle.restaurants
             setListedRestaurants(resData);
             setFilteredList(resData);  
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        
    };

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) 
    return(
         <h1>Looks like you're offline, Please check your internet connection</h1>
         );

    return listedRestaurants.length===0? <ShimmerUI /> :(
        <div className="body">
            <div className="search flex items-center">

                <div className="flex flex-wrap items-center m-4 px-2 ">
                    <input className=" border shadow-lg h-8 rounded-lg p-2" type="text" placeholder="search restaurant" value={serachText} onChange={(e)=>{
                        setSerachText(e.target.value)
                    }}/>
                    <button className="flex shadow-lg items-center m-4 p-4 border h-8 w-24 rounded-lg bg-green-100 transform active:scale-75 transition-transform" onClick={()=>{
                        const filteredRes=listedRestaurants.filter(res=>res.info.name.toLowerCase().includes(serachText.toLowerCase()));
                        setFilteredList(filteredRes);
                    }} >search</button>
                </div>
               {!filterOn? <button className="shadow-lg filter-btn m-4 p-4 rounded-lg h-8  flex items-center border bg-gray-100 transform active:scale-75 transition-transform" onClick={()=>{
                    listFiltered=listedRestaurants.filter(res=>res.info.avgRating >= 4.1)
                    setListedRestaurants(listFiltered);
                    setFilterOn(true);

                    console.log("Filtered Sir !!",listFiltered);
                }}>
                    Top rated restaurants
                </button> :null}

                {filterOn?( <div className="go-back">
                <button className=" shadow-lg transform active:scale-75 transition-transform m-4 p-4 rounded-lg h-8  flex items-center border border-solid bg-gray-100" onClick={()=>{
                    normalList=filteredList.filter(res=>res.info);
                        setListedRestaurants(normalList);
                        setFilterOn(false);
                }}> 🔙 All restaurants</button>
            </div>):null}
           


            </div>
            <div className="container">
               <div className="res-container flex flex-wrap justify-center">
               {
               listedRestaurants?.map((res)=>(
                <Link className="no-underline" key={res.info.name} to={"/restaurants/"+res.info.id}>
                    <RestaurantCard  resData={res}/>
                    </Link>
                ))
               }  
               </div>
            </div>
        </div>
    )
}

export default Body;