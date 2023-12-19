import ItemList from "./ItemList";

const RestaurantCategory=({data})=>{
    const handleClick=()=>{
        console.log("Say hi");
    }
    console.log("DataPROPS",data);
    return(
        <div>
            <div role="button" className="header bg-gray-100 w-6/12 mx-auto my-4 p-3 shadow-lg">
            <div className="flex justify-between" onClick={handleClick} >
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            <ItemList item={data.itemCards}/>
        </div>
        </div>
    )
}
export default RestaurantCategory;