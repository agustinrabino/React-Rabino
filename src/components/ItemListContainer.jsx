import { Row } from "react-bootstrap";
import { ItemList } from "./ItemList";

export function ItemListContainer(props) {
    return(
        <>
        <h4>Welcome! you have {props.greeting} items in your shopping cart</h4>
        <Row xs={1} md={2} lg={3} className="g-3">
            <ItemList></ItemList>
        </Row>
        </>
    );
}