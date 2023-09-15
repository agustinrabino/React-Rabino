import { useShoppingCart } from '../context/ShoppingCartContext';
import { MyButton } from './MyButton'

export function ItemButtonAddCart({quantity, size, id, stock}) {
    const { addCartQuantity } = useShoppingCart()
    
      return (
        <>
            {quantity == 0 || stock == 0 ?
            <div className='d-flex justify-content-center' style={{ backgroundColor:"grey", borderRadius:"10px", width:"clamp(240px, 10vw, 500px)", gap:"5px", padding:"1px 8px"}}>
               <MyButton buttonStyle="addItemCart">Add to Cart</MyButton>
            </div> : 
            <div className='d-flex justify-content-center' style={{ backgroundColor:"black", borderRadius:"10px", width:"clamp(240px, 10vw, 500px)", gap:"5px", padding:"1px 8px"}}>
                <MyButton onClick={()=>addCartQuantity(id, quantity, size, stock)} buttonStyle="addItemCart">Add to Cart</MyButton>
            </div>}
        </>
    )
}