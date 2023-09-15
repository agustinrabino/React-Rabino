import { useQuantity } from '../hooks/useQuantity';
import { useSize } from '../hooks/useSize';
import { ItemButtonSize } from './ItemButtonSize';
import { ItemButtonQuantity } from './ItemButtonQuantity';
import { ItemButtonAddCart } from './ItemButtonAddCart';

export function ItemButton({id, sizes}) {
    const { quantity, handleClickDecrement, handleClickIncrement } = useQuantity()
    const { size, handleClickSize } = useSize(sizes)
    
      return (
        <div className='d-flex flex-column justify-content-center mt-auto gap-4'>
            <div className='d-flex flex-column'>
                <div className='d-flex justify-content-between px-2'> 
                    <ItemButtonSize handleClickSize={handleClickSize} sizes={sizes}></ItemButtonSize>
                    <ItemButtonQuantity quantity={quantity} stock={size.stock} handleClickDecrement={handleClickDecrement} handleClickIncrement={handleClickIncrement}></ItemButtonQuantity>
                </div>
                {size.stock>0 ? <span className='align-self-end me-4' style={{color:"grey", fontSize:"0.8rem"}}>Stock:{size.stock}</span>:
                <span className='align-self-end me-4' style={{color:"grey", fontSize:"0.8rem"}}>Out of Stock</span>}
            </div>
            <ItemButtonAddCart quantity={quantity} id={id} size={size.size} stock={size.stock}></ItemButtonAddCart>
        </div>
    )
}