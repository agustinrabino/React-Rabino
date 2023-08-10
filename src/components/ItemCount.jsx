import { useState } from 'react'
import { Button } from './Button'
import "./ItemCount.css"

export function ItemCount() {

const [item, setItem] = useState(0)
const handleClickDecrement = () => {setItem(item - 1)}
const handleClickIncrement = () => {setItem(item + 1)}
const handleSubmit = () => {console.log(`item added to cart`)}
return(
    <div className='itemCount'>
        <div className='count'>
            <Button onClick ={handleClickDecrement} buttonStyle="countCart">-</Button>
            <span style={{color:"white"}}>{item}</span>
            <Button onClick ={handleClickIncrement} buttonStyle="countCart">+</Button>
        </div>
        <Button onClick={handleSubmit} buttonStyle="addItemCart">Add to Cart</Button>
    </div>
);
}