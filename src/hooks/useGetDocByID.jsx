import { useState, useEffect } from "react"
import { getFirestore, getDoc, doc } from "firebase/firestore"

export function useGetDocByID(id) {
    const [storeItem, setStoreItem] = useState()

    useEffect(()=>{
        const db = getFirestore();

        const ItemFirestore = doc(db, "Items", id);
        getDoc(ItemFirestore).then(result => {
            if (result.exists()) {
            setStoreItem({id: result.id, ...result.data() })}
        })
    }, [])

    return{
        storeItem, 
    }
}