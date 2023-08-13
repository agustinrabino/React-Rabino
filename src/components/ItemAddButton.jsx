import { useShoppingCart } from '../context/ShoppingCartContext';
import { useState } from 'react'
import { Button } from './Button'

export function ItemAddButton({id}) {
    const {addCartQuantity} = useShoppingCart()
    const [quantity, setQuantity] = useState(0)
    const handleClickDecrement = () => {setQuantity(quantity - 1)}
    const handleClickIncrement = () => {setQuantity(quantity + 1)}
  
      return (
        <div className='d-flex justify-content-center mt-auto' style={{
            backgroundColor:"black",
            borderRadius:"10px",
            width:"clamp(240px, 10vw, 500px)",
            gap:"5px",
            padding:"1px 8px"}}>
            <div className='d-flex justify-content-between align-items-center' style={{width:"95px"}}>
                {quantity>0 && <Button onClick ={handleClickDecrement} buttonStyle="countCart">-</Button>}
                <span style={{color:"white", margin:"auto"}}>{quantity}</span>
                <Button onClick ={handleClickIncrement} buttonStyle="countCart">+</Button>
            </div>
            <Button onClick={()=>addCartQuantity(id, quantity)} buttonStyle="addItemCart">Add to Cart</Button>
        </div>
        )}