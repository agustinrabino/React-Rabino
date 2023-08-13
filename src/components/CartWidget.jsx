import { ShoppingCart } from "./ShoppingCart";
import { useShoppingCart } from "../context/ShoppingCartContext.jsx"

export function CartWidget() {
  const {cartQuantity} = useShoppingCart()
  return (
    <div className="d-flex m-1" style={{
                    position: "relative",
                    width:"32px" }}>
      <ShoppingCart
      ></ShoppingCart>
      {cartQuantity > 0 && (
      <div className="rounded-circle bg-danger rounded-circle d-flex justify-content-center align-items-center" style={{
                    fontSize:"13px",
                    color:"white",
                    position:"absolute",
                    bottom:"0",
                    right:"0",
                    width:"23px",
                    height:"23px",
                    transform:"translate(40%, 30%)"  }}>{cartQuantity}
      </div> )}
    </div>
  );
}
