import { React, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from '../hooks/ShoppingCartContext';
import { Stack, Button, Modal } from 'react-bootstrap';
import { ShoppingCartItem } from './ShoppingCartItem';
import { FormatCurrency } from '../helper/FormatCurrency';
import storeItems from "../data/StoreItems.json"


export function ShoppingCart() {
const {cartItems} = useShoppingCart()
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>
        <div onClick={handleShow} style={{ cursor:"pointer" }}>
            <FontAwesomeIcon icon={faCartShopping} style={{ fontSize:"28px", color:"black" }}/>        
        </div>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack>
                    {cartItems.map(item => (<ShoppingCartItem key={item.id} {...item}/>))}
                </Stack>
                <div className="d-flex justify-content-end fw-bold mt-4">Total {FormatCurrency(
                    cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find(i => i.id === cartItem.id)
                        return( total + (item?.price || 0) * cartItem.quantity )},0)
                )}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">Checkout</Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}
