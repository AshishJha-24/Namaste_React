import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
  // const [resInfo, setresInfo] = useState(null);
  const [showIndex,setShowIndex]=useState(0);

  const {resId} = useParams();
  const resInfo=useRestaurantMenu(resId);


  if(resInfo==null){
    return <Shimmer/>;
  }

  const {name, cuisines, costForTwoMessage} =resInfo?.cards[0]?.card?.card?.info;

  let {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;
  if(itemCards==undefined){
    itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0].itemCards;;
  }


  const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  
  return  (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(" ")} - {costForTwoMessage}
      </p>
     

     {/* Categories accordions */}
     {
      categories.map((category,index)=>{
        return <RestaurantCategory key={category?.card?.card?.title}data={category?.card?.card}
         showItem={index===showIndex?true:false}
         setShowIndex={setShowIndex}
         index={index}
         currentIndex={showIndex}
        />
      })
     }
    </div>
  );
};

export default RestaurantMenu;
