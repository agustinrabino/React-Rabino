import { useState, useEffect } from "react"

export function useFetchFilter(data) {
    const [storeItems, setStoreItems] = useState([])
    const [storeRenderItems, setStoreRenderItems] = useState([])
    const [categories, setCategories] = useState('ALL')

    useEffect(()=>{
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=> resolve(data),1000)
        })
        promise.then(result => {
            setStoreItems(result)
            setStoreRenderItems(result)})
    }, [data])

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