import { ShoppingCartWidgetSummary } from "./ShoppingCartWidgetSummary";
import { useShoppingCart } from "../context/ShoppingCartContext.jsx"

const styleNumberCart = {
  fontSize:"13px",
  color:"white",
  position:"absolute",
  bottom:"0",
  right:"0",
  width:"23px",
  height:"23px",
  transform:"translate(40%, 30%)"  
}

export function ShoppingCartWidget() {
  const {cartQuantity} = useShoppingCart()
  return (
    <div className="d-flex m-1" style={{
                    position: "relative",
                    width:"32px" }}>
      <ShoppingCartWidgetSummary
      ></ShoppingCartWidgetSummary>
      {cartQuantity > 0 && (
      <div className="rounded-circle bg-danger rounded-circle d-flex justify-content-center align-items-center" style={styleNumberCart}>{cartQuantity}
      </div> )}
    </div>
  );
}
