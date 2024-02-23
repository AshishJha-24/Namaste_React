import RestoCard from "./RestoCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [serarchText,setSerachText]=useState("");
const [filterData, setfilterData]=useState([]);

  useEffect(() => {
    fectchData();
  }, []);

  const fectchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setfilterData( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
   
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" value={serarchText} onChange={(e)=>{
            setSerachText(e.target.value);
          }} />
          <button onClick={()=>{
          const filteredList=  listOfRestaurant.filter((data)=>{
              return data.info.name.toLowerCase().includes(serarchText.toLowerCase());

            })
           
                setfilterData(filteredList);
            
           
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurant(
              listOfRestaurant.filter((data) => data.info.avgRating > 4.3)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filterData.map((restaurant) => (
          <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestoCard resData={restaurant} /> </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
