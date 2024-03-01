import { CDN_URL } from "../utils/constants";
const RestoCard=(props)=>{
    const {resData}=props;
    const{name,cuisines,avgRating,cloudinaryImageId,sla,areaName}=resData.info;


   return  (
    <div className="m-4 hover:scale-90">
        <img className="w-[200px] h-[200px] rounded-xl"src={CDN_URL+cloudinaryImageId} alt="res img" />
        <div className="w-[200px]">
        <p className="font-bold truncate">{name}</p>
        <p className="font-bold">⭐ {avgRating} . {sla.deliveryTime} mins</p>
        <p className="truncate">{cuisines.join(",")}</p>
         <p> {areaName}</p>
        </div>
      
      
    </div>
)

}


export const withPromotedLabel=(RestoCard)=>{
    return (props)=>{
       const {resData}=props;
       return (
        <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg z-10 ">Promoted</label>
        <RestoCard resData={resData}/>
        </div>
)
    }
}

export default RestoCard;