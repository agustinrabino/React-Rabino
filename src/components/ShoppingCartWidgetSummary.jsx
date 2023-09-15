import { React, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack, Button, Modal } from 'react-bootstrap';
import { ShoppingCartItem } from './ShoppingCartWidgetItem';
import { FormatCurrency } from '../helper/FormatCurrency';
import { NavLink } from "react-router-dom"
import { Nav } from 'react-bootstrap';

export function ShoppingCartWidgetSummary() {
const {cartItems, totalOrder, clearCart} = useShoppingCart()
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    
  return (
    <>
        <div onClick={handleShow} style={{ cursor:"pointer" }}>
            <FontAwesomeIcon icon={faCartShopping} style={{ fontSize:"28px", color:"black" }}/>        
        </div>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            {cartItems.length === 0 ? 
                (<>
                    <Modal.Header closeButton>
                        <Modal.Title>Your cart is empty</Modal.Title>
                    </Modal.Header>
                </>) :
                (<>
                    <Modal.Header closeButton>
                        <Modal.Title>Shopping Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stack className='gap-1'>
                            {cartItems.map(item => (<ShoppingCartItem key={item.id} {...item}/>))}
                        </Stack>
                        <div className="d-flex justify-content-end fw-bold mt-4">Total {FormatCurrency(totalOrder)}</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>clearCart()} variant="danger">Clear Cart</Button>
                        <Nav.Link to="/checkout" as={NavLink}>
                            <Button onClick={()=>setShow(false)} variant="primary">Checkout</Button>
                        </Nav.Link>
                    </Modal.Footer>
                </>)
            }
        </Modal>
    </>
  );
}
