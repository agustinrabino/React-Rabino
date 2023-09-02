import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/StoreItems.json"
import { Button as MyButton} from "./Button"
import { FormatCurrency } from '../helper/FormatCurrency';

export function ShoppingCartItem ({id, quantity, size}) {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    
    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.url[0]} style={{width:"125px", height:"75px", objectFit:"cover"}}/>
            <div className="me-auto d-flex flex-column justify-content-center">
                <div style={{fontSize:"13px"}} className="mb-2">{`${item.name}`}</div>
                <div style={{fontSize:"10px", fontStyle:"italic"}}>{`size: ${size} - unit price: ${FormatCurrency(item.price)}`}</div>
                <div style={{fontSize:"10px", fontStyle:"italic"}} className="d-flex  align-items-center justify-content-between" >
                    <span>{`quantity: `} </span>
                    <div className="me-3">
                        {quantity>1 && <MyButton  onClick={()=>decreaseQuantity(id, size)} buttonStyle="countShoppingCart" className="btn">-</MyButton>}
                        <span>{` ${quantity} `}</span>
                        <MyButton  onClick={()=>increaseQuantity(id, size)} buttonStyle="countShoppingCart" className="btn">+</MyButton>
                    </div>
                </div>
            </div>
            <div style={{fontSize:"12px", fontWeight:"bold"}}>{`total: ${FormatCurrency(quantity * item.price)}`}</div>
            <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(id, size)}>x</Button>
        </Stack>
    )
}