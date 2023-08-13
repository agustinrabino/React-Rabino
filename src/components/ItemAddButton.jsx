import { useShoppingCart } from '../context/ShoppingCartContext';
import { useState } from 'react'
import { Button } from './Button'

export function ItemAddButton({id, sizes}) {
    const {addCartQuantity} = useShoppingCart()
    const [quantity, setQuantity] = useState(0)
    const [size, setSize] = useState(sizes[0])
    const handleClickDecrement = () => {setQuantity(quantity - 1)}
    const handleClickIncrement = () => {setQuantity(quantity + 1)}
  
      return (
        <div className='d-flex flex-column justify-content-center mt-auto gap-4'>
            <div className='d-flex justify-content-between px-2'> 
                <div className="d-flex w-25 gap-2"> 
                    <label for="size">Size:</label>
                    <select value={size} onChange={e => setSize(e.target.value)}>
                        {sizes.map(c => (
                        <option value={c}>{c}</option>
                        ))}
                    </select>
                </div>
                <div className='d-flex justify-content-between align-items-center' style={{width:"95px"}}>
                    {quantity>0 && <Button onClick ={handleClickDecrement} buttonStyle="countCart">-</Button>}
                    <span style={{color:"black", margin:"auto"}}>{quantity}</span>
                    <Button onClick ={handleClickIncrement} buttonStyle="countCart">+</Button>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{
                backgroundColor:"black",
                borderRadius:"10px",
                width:"clamp(240px, 10vw, 500px)",
                gap:"5px",
                padding:"1px 8px"}}>
                <Button onClick={()=>addCartQuantity(id, quantity, size)} buttonStyle="addItemCart">Add to Cart</Button>
            </div>
        </div>
        )}