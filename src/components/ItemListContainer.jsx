import data from "../data/StoreItems.json"
import { useFetchFilter } from "../hooks/useFetchFilter";
import { ItemList } from "./ItemList"
import { ItemListContainerLoading } from "./ItemListContainerLoading";


export function ItemListContainer(props) {
    const { storeItems, changeSelect } = useFetchFilter(data)

    return(
        <>
        <h4>Welcome! you have {props.greeting} items in your shopping cart</h4>
        {storeItems.length === 0 ? (<ItemListContainerLoading />) : (<ItemList storeItems={storeItems} changeSelect={changeSelect}/>)}
        </>
    )
}