import { useShoppingCart } from "../context/ShoppingCartContext";
import { ShoppingCartCheckoutSummary } from "../components/ShoppingCartCheckoutSummary";
import { ShoppingCartCheckoutOrderInfo } from "../components/ShoppingCartCheckoutOrderInfo";

export function ShoppingCartCheckout() {
const { cartItems, totalOrder } = useShoppingCart()
           
    return( 
        <>
            <ShoppingCartCheckoutSummary cartItems={cartItems} totalOrder={totalOrder}></ShoppingCartCheckoutSummary>
            <ShoppingCartCheckoutOrderInfo cartItems={cartItems} totalOrder={totalOrder}></ShoppingCartCheckoutOrderInfo>
        </>
    )                        
}