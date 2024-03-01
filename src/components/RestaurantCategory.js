import { useState } from "react";
import ItemList from "./ItemList";

 const RestaurantCategory=({data,showItem,setShowIndex,index,currentIndex})=> {
   
const handleClick=()=>{
   if(currentIndex==index){
    setShowIndex(null);
   }
   else{
    setShowIndex(index);
   }
    
}
  


  return (
    <div className="">
        {/* {header} */}

        <div className=" my-4 mx-auto w-6/12 p-4 shadow-lg">

            <div className="flex justify-between cursor-pointer" onClick={handleClick}>

            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            {
            
               showItem && <ItemList  items={data.itemCards}/>
            
              }
          
            

       
        </div>


        {/* {Accodion Body} */}
    
    
    </div>
  )
}

export default RestaurantCategory;
