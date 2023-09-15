import { getFirestore, doc, updateDoc } from "firebase/firestore"
import { useShoppingCart } from "../context/ShoppingCartContext"


export function useUpdateFirebase(cartItem) {
    const tempCart = cartItem
    const {storeItems} = useShoppingCart()
    const db = getFirestore()

    const updateStock = () => {
        tempCart.map((item)=> {
        const currentStock = item.stock - item.quantity
        const oldSizesStock = storeItems.find(i => i.id === item.id).sizes
        const newSizesStock = oldSizesStock.map(
                (sizes)=> {
                    if (sizes.size === item.size) {
                        return(
                            {...sizes, stock: currentStock}
                        )
                    } else {
                        return(
                            sizes
                        )
                    }
                }
            )
        const ItemsFirestore = doc(db, "Items", item.id);
        updateDoc(ItemsFirestore,{sizes: newSizesStock})
    })}

    return{
        updateStock
    }
}