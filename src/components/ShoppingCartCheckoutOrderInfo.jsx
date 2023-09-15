import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { MyButton } from "./MyButton";
import { useSubmitOrder } from "../hooks/useSubmitOrder";
import { useUpdateFirebase } from "../hooks/useUpdateFirebase";

export function ShoppingCartCheckoutOrderInfo({cartItems, totalOrder}) {
const { formValues, handleChange, onSubmitOrder } = useSubmitOrder()
const { updateStock } = useUpdateFirebase(cartItems)
const handleSubmit = (e)=>{
    e.preventDefault()
    updateStock()
    onSubmitOrder(cartItems, totalOrder)
}                
    return( 
        <>
            {cartItems.length !== 0 && 
                (<Container className="mt-5">
                    <Form onSubmit={handleSubmit}>
                        <h4>Payment and Shipping</h4>
                        <Form.Group className="mb-1">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                            required
                            placeholder="John"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={formValues.name}/>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                            required
                            placeholder="Doe"
                            type="text"
                            name="lastname"
                            onChange={handleChange}
                            value={formValues.lastname}/>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                            required
                            placeholder="john.doe@aol.com"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={formValues.email}/>
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                            required
                            type="number"
                            placeholder="555-555-5555"
                            name="phone"
                            onChange={handleChange}
                            value={formValues.phone}/>
                        </Form.Group>   
                        <MyButton type="submit" buttonStyle="checkout">Complete purchase</MyButton>
                    </Form>
                </Container>)
            }
        </>
    )                        
}