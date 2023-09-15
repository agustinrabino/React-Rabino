import { useParams } from "react-router-dom";
import { ItemDetails } from "../components/ItemDetails";
import { useGetDocByID } from "../hooks/useGetDocByID";
import { ItemLoading } from "../components/ItemLoading";


export function ItemDetailsContainer() {
    const { ID } = useParams()
    const {storeItem} = useGetDocByID(ID)
    
    return(
        <>
        {storeItem === undefined ? (<ItemLoading />) : (<ItemDetails key={storeItem.id} item={storeItem}></ItemDetails>)}
        </>
    )                
}