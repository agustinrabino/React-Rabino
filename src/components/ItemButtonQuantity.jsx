import { Button } from './Button'

export function ItemButtonQuantity({quantity, handleClickDecrement, handleClickIncrement}) {

return(
    <div className='d-flex justify-content-between align-items-center' style={{width:"95px"}}>
        {quantity>0 && <Button onClick ={handleClickDecrement} buttonStyle="countCart">-</Button>}
        <span style={{color:"black", margin:"auto"}}>{quantity}</span>
        <Button onClick ={handleClickIncrement} buttonStyle="countCart">+</Button>
    </div>
)}