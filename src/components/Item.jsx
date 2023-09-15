import Card from 'react-bootstrap/Card';
import { FormatCurrency } from '../helper/FormatCurrency';
import { ItemButton } from './ItemButton';
import { MyButton } from "./MyButton.jsx"
import { NavLink } from 'react-router-dom'

export function Item({id, name, price, url, sizes}) {
  return (
    <Card border="dark" className='h-100' style={{position: "relative"}}>
      <Card.Img variant="top" src={url[0]} style={{height:"250px", objectFit:"cover"}}/>
      <NavLink to={`/products/${id}`}>
        <MyButton buttonStyle="moreInfo">More Info</MyButton>
      </NavLink>
      <Card.Body className='d-flex flex-column align-items-center justify-content-between'>
        <div className='mb-3 w-100 px-3'>
          <Card.Title style={{ fontWeight:"bolder" }}>{name}</Card.Title>
          <Card.Text className='d-flex justify-content-end align-items-center w-100'>
            <span style={{ fontSize:"24px", marginLeft:"8px" }}>{FormatCurrency(price)}</span>
          </Card.Text>
        </div>
        <ItemButton id={id} sizes={sizes}></ItemButton>
      </Card.Body>
    </Card>
  );
}
  