import { Item } from "./Item"
import { Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import data from "../data/StoreItems.json"


export function ItemList() {

    const [storeItems, setStoreItems] = useState([])

    useEffect(()=>{
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=> resolve(data),3000)
        })
        promise.then(data=> setStoreItems(data))
    }, [])

    return(
        storeItems.length === 0 ? (
            <h2>Loading...</h2>
            ) : (
                storeItems.map(item => {
                    return(
                        <Col key={item.id}>
                        <Item {...item}></Item>
                        </Col>
                    )})
            )
    )
}