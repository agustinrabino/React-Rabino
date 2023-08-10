import { Container } from "react-bootstrap";
import { ItemListContainer } from "../components/ItemListContainer";

export function Sales() {
    return( 
    <>
    <Container>
        <h1>Sales</h1>
        <ItemListContainer greeting="23"></ItemListContainer>
    </Container>
    </>
    )
}

