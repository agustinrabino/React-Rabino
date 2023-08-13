import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/StoreItems.json"
import { Button } from "react-bootstrap";
import { Button as MyButton} from "./Button"
import { FormatCurrency } from '../utilities/FormatCurrency';



export function Cart ({id, quantity, size}) {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    

    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{width:"125px", height:"75px", objectFit:"cover"}}/>
            <div className="me-auto d-flex flex-column justify-content-center">
                <div style={{fontSize:"13px"}} className="mb-2">{`${item.name}`}</div>
                <div style={{fontSize:"10px", fontStyle:"italic"}}>{`size: ${size} - unit price: ${FormatCurrency(item.price)}`}</div>
                <div style={{fontSize:"10px", fontStyle:"italic"}} className="d-flex  align-items-center" >
                    <span>{`quantity: `} </span>
                    <MyButton  onClick={()=>decreaseQuantity(id, size)} buttonStyle="countShoppingCart" className="btn">-</MyButton>
                    <span>{` ${quantity} `}</span>
                    <MyButton  onClick={()=>increaseQuantity(id, size)} buttonStyle="countShoppingCart" className="btn">+</MyButton>
                </div>
            </div>
            <div style={{fontSize:"12px", fontWeight:"bold"}}>{`total: ${FormatCurrency(quantity * item.price)}`}</div>
            <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(item.id, size)}>x</Button>
        </Stack>
    )
}