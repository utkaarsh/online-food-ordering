const ShimmerUIList=()=>{
    const n=5;
    return(
       <div className="mt-12">
        {[...Array(n)].map((e,i)=>(
        <div key={i} role="status" className="flex">
        <div  className="justify-center bg-gray-200 w-7/12 p-4 space-y-4 border border-gray-100 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-500 md:p-6 dark:border-gray-500 h-[100px] mx-auto mt-9 flex justify-between">
        <div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-[540px] mb-2.5 ml-6"></div>
        <div class="w-[540px] h-2 bg-gray-200 rounded-full dark:bg-gray-400 m-6"></div>
    </div>
    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-400 w-24 m-10"></div>
        </div>
    </div>
       ))}
       </div>
    )
}
export default ShimmerUIList;