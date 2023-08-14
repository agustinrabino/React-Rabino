import { Row } from "react-bootstrap";
import { ItemList } from "./ItemList";
import { SearchBar } from "./SearchBar";

export function ItemListContainer(props) {
    return(
        <>
        <h4>Welcome! you have {props.greeting} items in your shopping cart</h4>
        <ItemList></ItemList>
        </>
    );
}