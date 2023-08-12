import { Container } from "react-bootstrap";
import { ItemListContainer } from "../components/ItemListContainer";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Sales() {
    const {cartQuantity} = useShoppingCart()

    return( 
    <>
    <Container>
        <h1>Sales</h1>
        <ItemListContainer greeting={cartQuantity}></ItemListContainer>
    </Container>
    </>
    )
}

