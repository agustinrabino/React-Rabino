import { Item } from "./Item"
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { SearchBar } from "./SearchBar";

export function ItemList({storeItems, changeSelect}) {
    const [search, setSearch] = useState('')

    return(
        <>
            <SearchBar updateFilter={(search) => setSearch(search)} changeSelect={changeSelect}></SearchBar>
            <Row xs={1} md={2} lg={3} className="g-3">
                {storeItems.filter((item)=>{
                    return(search.toLocaleLowerCase() === " " ? item : item.name.toLowerCase().includes(search.toLowerCase()))
                    }).map(item => {
                            return(
                                <Col key={item.id}>
                                    <Item key={item.id} {...item}></Item>
                                </Col>
                            )
                        }
                    )
                }
            </Row>
        </>
    )
}