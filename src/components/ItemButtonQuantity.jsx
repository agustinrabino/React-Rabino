import { MyButton } from './MyButton'

export function ItemButtonQuantity({quantity, handleClickDecrement, handleClickIncrement, stock}) {
    return(
        <div className='d-flex justify-content-between align-items-center' style={{width:"95px"}}>
            {quantity>0 && <MyButton onClick ={handleClickDecrement} buttonStyle="countCart">-</MyButton>}
            <span style={{color:"black", margin:"auto"}}>{quantity}</span>
            {quantity<stock &&<MyButton onClick ={handleClickIncrement} buttonStyle="countCart">+</MyButton>}
        </div>
    )
}