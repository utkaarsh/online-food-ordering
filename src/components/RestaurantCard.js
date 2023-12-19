import { CDN_IMG_URL } from "../utils/constants";

const RestaurantCard=({resData})=>{
    console.log('hercules :',resData);
    const {name,avgRating,cuisines,costForTwo,cloudinaryImageId}=resData.info;
return(
     <div className=" res-card p-4 m-4 bg-gray-200 hover:bg-gray-400 hover:shadow-xl w-[250px] min-h-[330px] rounded-lg">
        <img className="res-image rounded-lg" src={CDN_IMG_URL+cloudinaryImageId} alt="" />
        <h2 className="font-bold py-4 text-lg">{name}</h2>
        <h5><b>Rating:</b>{avgRating}</h5>
        <h5><b>Cuisine:</b>{cuisines?.join(", ")}</h5>
        <h5><b>Cost:</b>{costForTwo}</h5>
    </div>
)
}

export const withPromoted=(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-green-300  text-center px-4 rounded-lg">Pure Veg </label>
                <RestaurantCard {...props} /> 
            </div>
        )
    }
}

export default RestaurantCard;