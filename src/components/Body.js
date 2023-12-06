import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const apiUrl="https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.533117461252107&lng=73.82439438253641&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
// const apiURL=  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";


const Body=()=>{
    const [serachText,setSerachText]=useState("");
    const [listedRestaurants,setListedRestaurants]=useState([]);
    const [filteredList,setFilteredList]=useState();

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData= async ()=>{
        try {
            const data=await fetch(apiUrl);
            const json=await data.json();
            const resData=json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
            // console.log("TRACK::",json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
             setListedRestaurants(resData);
             setFilteredList(resData);   
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        
    };


    return listedRestaurants.length===0? <ShimmerUI />:(
        <div className="body">
            <div className="search">

                <div className="search-box">
                    <input type="text" placeholder="search restaurant" value={serachText} onChange={(e)=>{
                        setSerachText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        const filteredRes=listedRestaurants.filter(res=>res.info.name.toLowerCase().includes(serachText.toLowerCase()));
                        setFilteredList(filteredRes)
                    }} >search</button>
                </div>

                <button className="filter-btn" onClick={()=>{
                    listFiltered=listedRestaurants.filter(res=>res.info.avgRating >= 4)
                    setListedRestaurants(listFiltered);
                    console.log("Filtered Sir !!",listFiltered);
                }}>
                    Top rated restaurants
                </button> 
            {/* <div className="go-back">
                <button onClick={()=>{
                    normalList=listedRestaurants.filter(res=>res.info);
                    console.log("Hitted Gp back to all");
                    setListedRestaurants(normalList)
                }}>All restaurants</button>
            </div> */}
            </div>
            <div className="container">
               <div className="res-container">
               {
               filteredList.map((res)=>(
                <RestaurantCard key={res.info.id} resData={res}/>
                ))
               }  
               </div>
            </div>
        </div>
    )
}

export default Body;