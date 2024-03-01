import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cardSlice";

const Cart =()=>{
const cardItem=useSelector((store)=>store.cart.items);
const dispatch =useDispatch();



console.log(cardItem);
    return(
         <div className="text-center m-4 p-4">
         <h1 className="text-2xl font-bold ">Cart</h1>
      

        <div className="w-6/12 m-auto">
            <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={()=>{
                dispatch(clearCart())
            }}>Clear Cart</button>

            {cardItem.length===0 && <h1>Your Cart is empty Add items to your cart</h1>}
            <ItemList items={cardItem}/>
        </div>
        </div>
    ) 

}

export default Cart;
