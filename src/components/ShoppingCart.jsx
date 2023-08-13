import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Stack } from 'react-bootstrap';
import { Cart } from './Cart';
import { FormatCurrency } from '../utilities/FormatCurrency';
import storeItems from "../data/StoreItems.json"


export function ShoppingCart() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const {cartItems} = useShoppingCart()
  return (
    <>
        <div onClick={handleShow} style={{cursor:"pointer"}}>
            <FontAwesomeIcon icon={faCartShopping} style={{
                        fontSize:"28px",
                        color:"black"}}/>        
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack>
                    {cartItems.map(item => (<Cart key={item.id} {...item}/>))}
                </Stack>
                <div className="d-flex justify-content-end fw-bold mt-4">Total {FormatCurrency(
                    cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find(i => i.id === cartItem.id)
                        return(
                            total + (item?.price || 0) * cartItem.quantity
                        )
                    },0)
                )}</div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary">Checkout</Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}
