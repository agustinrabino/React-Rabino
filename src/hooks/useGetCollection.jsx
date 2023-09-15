import { useState, useEffect } from "react"
import { getFirestore, getDocs, collection } from "firebase/firestore"

export function useGetCollection() {
    const [storeItems, setStoreItems] = useState([])
    const [storeRenderItems, setStoreRenderItems] = useState([])
    const [categories, setCategories] = useState('ALL')

    useEffect(()=>{
        const db = getFirestore();

        const ItemsFirestore = collection(db, "Items");
        getDocs(ItemsFirestore).then(result => {
            setStoreItems(result.docs.map((doc)=>({id: doc.id, ...doc.data()})));
            setStoreRenderItems(result.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })
    }, [])

    const changeSelect = (e) => {
        setCategories(e.target.value)
        if (e.target.value === "ALL") {
            setStoreRenderItems(storeItems)
        } else {
            const newStoreItems = storeItems.filter(
                item => item.category === e.target.value
            )
            setStoreRenderItems(newStoreItems)
        }
    }
    return{
        storeItems: storeRenderItems, 
        categories, 
        changeSelect
    }
}