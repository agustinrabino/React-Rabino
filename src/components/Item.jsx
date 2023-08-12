import Card from 'react-bootstrap/Card';
import { FormatCurrency } from '../utilities/FormatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useState } from 'react'
import { Button } from './Button'

export function Item({id, name, info, price, imgUrl}) {
  const {addCartQuantity} = useShoppingCart()
  const [quantity, setQuantity] = useState(0)
  const handleClickDecrement = () => {setQuantity(quantity - 1)}
  const handleClickIncrement = () => {setQuantity(quantity + 1)}

    return (
    <Card border="dark" className='h-100'>
      <Card.Img variant="top" src={imgUrl} style={{height:"250px", objectFit:"cover"}}/>
      <Card.Body className='d-flex flex-column align-items-center justify-content-between'>
        <div className='mb-3'>
          <Card.Title style={{ fontWeight:"bolder" }}>{name}</Card.Title>
          <Card.Text className='d-flex justify-content-between align-items-start w-100'>
            <span>{info}</span>
            <span style={{
              fontSize:"24px",
              marginLeft:"8px"
            }}>{FormatCurrency(price)}</span>
          </Card.Text>
        </div>
        <div className='d-flex justify-content-center mt-auto' style={{
                          backgroundColor:"black",
                          borderRadius:"10px",
                          width:"clamp(240px, 10vw, 500px)",
                          gap:"5px",
                          padding:"1px 8px"}}>
          <div className='d-flex justify-content-between align-items-center' style={{width:"95px"}}>
              <Button onClick ={handleClickDecrement} buttonStyle="countCart">-</Button>
              <span style={{color:"white"}}>{quantity}</span>
              <Button onClick ={handleClickIncrement} buttonStyle="countCart">+</Button>
          </div>
          <Button onClick={()=>addCartQuantity(id, quantity)} buttonStyle="addItemCart">Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
  