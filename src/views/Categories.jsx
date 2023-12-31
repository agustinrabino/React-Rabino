import { Container, Col, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { useGetCollection } from "../hooks/useGetCollection";
import { Item } from "../components/Item"

export function Categories() {
const { storeItems } = useGetCollection()
const categories = storeItems.map(item => item.category)
const uniqueCategories = new Set(categories)

    return( 
    <Container>
        <h1>Categories</h1>
        <h3>Browse our different categories using the accordion style menu</h3>
        <Accordion defaultActiveKey="0">
            {[...uniqueCategories].map( c => (
                <Accordion.Item key={c} eventKey={c}>
                    <Accordion.Header>{c}</Accordion.Header>
                    <Accordion.Body>
                        <Row xs={1} md={2} lg={3} className="g-3">
                            {storeItems.filter(item=>{
                                return(item.category === c)}).map(item => {
                                return(
                                    <Col key={item.id}>
                                        <Item key={item.id} {...item}></Item>
                                    </Col>
                                    )}
                            )}                   
                        </Row> 
                    </Accordion.Body>
                </Accordion.Item>
                ))}
         </Accordion>
    </Container>
    )
}