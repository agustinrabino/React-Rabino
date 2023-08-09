import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css"
import { NavLink } from "react-router-dom";

export function CartWidget() {
  return (
    <NavLink className="nav-cart" to="/shoppingcart" as={NavLink}>
      <FontAwesomeIcon icon={faCartShopping} className="fontAweCart"/>
      <div className="cartItemCount">23</div>
    </NavLink>
  );
}
