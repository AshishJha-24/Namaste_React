import RestoCard from "./RestoCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANTS } from "../utils/constants.js";

const Body = () => {
  const [serarchText, setSerachText] = useState("");
  const [filterData, setfilterData] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

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

    console.log(filterData);
  };

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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={serarchText}
            onChange={(e) => {
              setSerachText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            setfilterData(
              listOfRestaurant.filter((data) =>{
                return data.info.avgRating > 4.3;
              } )
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filterData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestoCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
