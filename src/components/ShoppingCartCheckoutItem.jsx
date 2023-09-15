import { useShoppingCart } from "../context/ShoppingCartContext";
import { FormatCurrency } from "../helper/FormatCurrency";
import { Button } from "react-bootstrap";

export function ShoppingCartCheckoutItem({id, size, quantity}) {
const {storeItems, removeFromCart} = useShoppingCart()
const item = storeItems.find(i => i.id === id)    

return( 
        <tr key={item.id}>
                <td>{item.name}</td>
                <td>{size}</td>
                <td>{FormatCurrency(item.price)}</td>
                <td>{quantity}</td>
                <td>
                        <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(id, size)}>x</Button>
                </td>
        </tr>       
    )
}