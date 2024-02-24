import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () => {
  // const [resInfo, setresInfo] = useState(null);

  const {resId} = useParams();
  const resInfo=useRestaurantMenu(resId);


  if(resInfo==null){
    return <Shimmer/>;
  }

  const {name, cuisines, costForTwoMessage} =resInfo?.cards[2]?.card?.card?.info;

  let {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;
  if(itemCards==undefined){
    itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0].itemCards;;
  }
  
  console.log(itemCards);


  return  (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(" ")} - {costForTwoMessage}
      </p>
      <ul>

        {
            itemCards.map((item)=>(<li key ={item.card.info.id}>{item.card.info.name}  --- Rs {item.card.info.defaultPrice/100 || item.card.info.price/100 }</li>))
        }


      </ul>
    </div>
  );
};


export default RestaurantMenu;
