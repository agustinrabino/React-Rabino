import { Container, Table } from "react-bootstrap";
import { ShoppingCartCheckoutItem } from "../components/ShoppingCartCheckoutItem";
import { FormatCurrency } from "../helper/FormatCurrency";

export function ShoppingCartCheckoutSummary({cartItems, totalOrder}) {           
    return(
        <>
        {cartItems.length === 0 ? (<Container className="d-flex justify-content-center mt-4"><h4>Your cart is empty</h4></Container>) : 
            (<Container>
                <h1>Checkout Summary</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Size</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (<ShoppingCartCheckoutItem key={item.id} {...item}/>))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Total</td>
                            <td> {FormatCurrency(totalOrder)}
                            </td>
                        </tr>
                    </tfoot>
                </Table>
            </Container>)
        }
        </>
    )
}