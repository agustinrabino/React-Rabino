import { Container } from "react-bootstrap";
import { ItemListContainer } from "../components/ItemListContainer";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Products() {
    const {cartQuantity} = useShoppingCart()

    return( 
    <>
    <Container>
        <h1>Products</h1>
        <ItemListContainer greeting={cartQuantity}></ItemListContainer>
    </Container>
    </>
    )
}

