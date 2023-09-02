import data from "../data/StoreItems.json"
import { useParams } from "react-router-dom";
import { ItemDetails } from "../components/ItemDetails";

export function ItemDetailsContainer() {

    const { ID } = useParams()
    const details = data.filter(item => item.id.toString() === ID.toString())
    return(
        details.length !== 0 ? details.map(item => {
                return(
                    <div key={item.id}>
                        <ItemDetails key={item.id} item={item}></ItemDetails>
                    </div>
                )}):
                <h1 className="text-center">404! This webpage was not found</h1>
      );
}