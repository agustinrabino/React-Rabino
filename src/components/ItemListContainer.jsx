import { useGetCollection } from "../hooks/useGetCollection";
import { ItemList } from "./ItemList"
import { ItemLoading } from "./ItemLoading";

export function ItemListContainer(props) {
    const { storeItems, changeSelect } = useGetCollection()

    return(
        <>
            <h4>Welcome! you have {props.greeting} items in your shopping cart</h4>
            {storeItems.length === 0 ? (<ItemLoading />) : (<ItemList storeItems={storeItems} changeSelect={changeSelect}/>)}
        </>
    )
}