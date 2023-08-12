import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/StoreItems.json"
import { Button } from "react-bootstrap";
import { FormatCurrency } from '../utilities/FormatCurrency';



export function Cart ({id, quantity}) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)

    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{width:"125px", height:"75px", objectFit:"cover"}}/>
            <div className="me-auto d-flex flex-column justify-content-center">
                <div style={{fontSize:"12px"}}>{`${item.name}`}</div>
                <div style={{fontSize:"9px", fontStyle:"italic"}}>{`unit price: ${FormatCurrency(item.price)} - quantity: ${quantity}`}</div>
            </div>
            <div style={{fontSize:"12px", fontWeight:"bold"}}>{`total: ${FormatCurrency(quantity * item.price)}`}</div>
            <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(item.id)}>x</Button>
        </Stack>
    )
}