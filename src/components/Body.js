import RestoCard, { withPromotedLabel } from "./RestoCard";
import { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANTS } from "../utils/constants.js";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [serarchText, setSerachText] = useState("");
  const [filterData, setfilterData] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const PromotedRestoCard = withPromotedLabel(RestoCard);
  const {loggedInUser,setUserName}=useContext(UserContext);

  useEffect(() => {
    fectchData();
  }, []);

  const fectchData = async () => {
    const data = await fetch(RESTAURANTS);
    const json = await data.json();
    setfilterData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(listOfRestaurant);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection...
      </h1>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className=" m-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={serarchText}
            onChange={(e) => {
              setSerachText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((data) => {
                return data.info.name
                  .toLowerCase()
                  .includes(serarchText.toLowerCase());
              });
              setfilterData(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <div className=" m-4">
          <button
            className="px-4 py-2 bg-green-100 m-4 "
            onClick={() => {
              setfilterData(
                listOfRestaurant.filter((data) => {
                  return data.info.avgRating > 4.3;
                })
              );
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="mx-4 my-8">
          <label >User: </label>
          <input
            className="p-2 border border-solid border-black"
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
      </div>
      </div>
   
        <div className="flex flex-wrap m-10" >
          {filterData.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.4 ?
               <PromotedRestoCard resData={restaurant} />
           : 
                <RestoCard resData={restaurant} />
              }
            </Link>
          ))}

      </div>
     </div>
   
  );
};

export default Body;
