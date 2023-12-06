import { CDN_IMG_URL } from "../utils/constants";

const RestaurantCard=({resData})=>{
    const {name,avgRating,cuisines,costForTwo,cloudinaryImageId}=resData.info;
    // console.log(resData );
return(
     <div className="res-card">
        <img className="res-image" src={CDN_IMG_URL+cloudinaryImageId} alt="" />
        <h2>{name}</h2>
        <h5>Rating:{avgRating}</h5>
        <h5>{cuisines?.join(", ")}</h5>
        <h5>Cost:{costForTwo}</h5>
    </div>
)
}

export default RestaurantCard;