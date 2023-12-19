const ShimmerUI =()=>{
    const n = 15;
    return(
        <div className="shimmer-container mt-5 flex items-center justify-center  flex-wrap">
        {[...Array(n)].map((e, i) => (
            <div key={i} role="status" className=" w-[250px] max-w-sm m-5 p-4 border  border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-500">
            <div class="flex items-center justify-center h-48  mb-4 bg-gray-300 rounded dark:bg-gray-500">
               
            </div>
            <div className="h-2.5 bg-white dark:bg-white w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500"></div>
            <div className="flex items-center mt-4">
              
                <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-500"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
        ))}



           
        </div>
    )
};

export default ShimmerUI;