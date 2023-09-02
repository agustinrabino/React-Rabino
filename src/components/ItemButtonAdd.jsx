import { useShoppingCart } from '../context/ShoppingCartContext';
import { useQuantity } from '../hooks/useQuantity';
import { useSize } from '../hooks/useSize';
import { Button } from './Button'
import { ItemButtonSize } from './ItemButtonSize';
import { ItemButtonQuantity } from './ItemButtonQuantity';

export function ItemButtonAdd({id, sizes}) {
    const { addCartQuantity } = useShoppingCart()
    const { quantity, handleClickDecrement, handleClickIncrement } = useQuantity()
    const { size, handleClickSize } = useSize(sizes)
  
      return (
        <div className='d-flex flex-column justify-content-center mt-auto gap-4'>
            <div className='d-flex justify-content-between px-2'> 
                <ItemButtonSize handleClickSize={handleClickSize} sizes={sizes}></ItemButtonSize>
                <ItemButtonQuantity quantity={quantity} handleClickDecrement={handleClickDecrement} handleClickIncrement={handleClickIncrement}></ItemButtonQuantity>
            </div>
            {quantity == 0 ?
            <div className='d-flex justify-content-center' style={{ backgroundColor:"grey", borderRadius:"10px", width:"clamp(240px, 10vw, 500px)", gap:"5px", padding:"1px 8px"}}>
               <Button buttonStyle="addItemCart">Add to Cart</Button>
            </div> : 
            <div className='d-flex justify-content-center' style={{ backgroundColor:"black", borderRadius:"10px", width:"clamp(240px, 10vw, 500px)", gap:"5px", padding:"1px 8px"}}>
                <Button onClick={()=>addCartQuantity(id, quantity, size)} buttonStyle="addItemCart">Add to Cart</Button>
            </div>}
             
        </div>
        )}