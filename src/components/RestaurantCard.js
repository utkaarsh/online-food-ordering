import { CDN_IMG_URL } from "../utils/constants";

const RestaurantCard=({resData})=>{
    const {name,avgRating,cuisines,costForTwo,cloudinaryImageId}=resData.info;
    // console.log(resData );
return(
     <div className=" res-card p-4 m-4 bg-gray-200 hover:bg-gray-400 hover:shadow-xl w-[250px] rounded-lg">
        <img className="res-image rounded-lg" src={CDN_IMG_URL+cloudinaryImageId} alt="" />
        <h2 className="font-bold py-4 text-lg">{name}</h2>
        <h5>Rating:{avgRating}</h5>
        <h5>{cuisines?.join(", ")}</h5>
        <h5>Cost:{costForTwo}</h5>
    </div>
)
}

export default RestaurantCard;