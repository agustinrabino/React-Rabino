import { Item } from "./Item"
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import data from "../data/StoreItems.json"
import { SearchBar } from "./SearchBar";


export function ItemList() {

    const [storeItems, setStoreItems] = useState([])
    const [search, setSearch] = useState('')

    useEffect(()=>{
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=> resolve(data),500)
        })
        promise.then(data=> setStoreItems(data))
    }, [])

    return(
        storeItems.length === 0 ? (
            <div className="d-flex justify-content-center mx-auto">
                <div class="spinner-border mt-5" style={{width: "5rem", height: "5rem"}} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            ) : (
            <>
                <SearchBar updateFilter={(search) => setSearch(search)}></SearchBar>
                <Row xs={1} md={2} lg={3} className="g-3">
                    {storeItems.filter((item)=>{
                        return(search.toLocaleLowerCase() === " " ? item : item.name.toLowerCase().includes(search.toLowerCase()))
                    }).map(item => {
                        return(
                            <Col>
                                <Item key={item.id} {...item}></Item>
                            </Col>
                            )}
                        )
                    }
                </Row>
            </>
            )
    )
}