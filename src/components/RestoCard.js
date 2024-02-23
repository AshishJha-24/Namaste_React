import { CDN_URL } from "../utils/constants";
const RestoCard=(props)=>{
    const {resData}=props;
    const{name,cuisines,avgRating,cloudinaryImageId,sla}=resData.info;


   return  (
    <div className="res-card">
        <img src={CDN_URL+cloudinaryImageId} alt="res img" />
        <p>{name}</p>
        <p>{cuisines.join(",")}</p>
        <p>{avgRating} Stars</p>
        <p>{sla.deliveryTime} Minutes</p>
    </div>
)

}

export default RestoCard;