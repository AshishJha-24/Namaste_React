import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";
import { ITEMIMAGEURL } from "../utils/constants";
const ItemList=({items})=>{


    const dispatch = useDispatch()
    console.log(dispatch)

    const handleAddItem=(item)=>{
        
        //Dispatch an action 
        dispatch(addItem(item));
    }
   
    return (
        <div>
            {items.map(item=>(
                <div key={item.card.info.id} className="my-5 border-b-2 flex align-middle">
                    <div className="text-left p-4  w-9/12">
                       <p className="font-bold">{item.card.info.name}</p> 
                       <p className="font-bold"><span>&#8377;</span>{item.card.info.price===undefined?item.card.info.defaultPrice/100:item.card.info.price/100 } </p> 
                       <p className="my-5 text-gray-400 text-xs">{item.card.info.description}</p>
                    </div>

                    <div className="p-4">
                        <img className="rounded-xl  w-[150px] h-[100px] "src={ITEMIMAGEURL+item.card.info.imageId} alt="" />
                        <button className="relative bottom-8 bg-white text-green-600 border-2 p-2 rounded-lg shadow-md" onClick= {()=> handleAddItem(item)
                        }  >Add + </button>
                    </div>
                </div>
            ))}
           
        </div>
    )
}

export default ItemList;