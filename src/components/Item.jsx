import Card from 'react-bootstrap/Card';
import { FormatCurrency } from '../utilities/FormatCurrency';
import { ItemAddButton } from './ItemAddButton';
import { Button } from "./Button.jsx"
import { NavLink } from 'react-router-dom'

export function Item({id, name, price, imgUrl, sizes}) {

    return (
    <Card border="dark" className='h-100' style={{position: "relative"}}>
      <Card.Img variant="top" src={imgUrl} style={{height:"250px", objectFit:"cover"}}/>
      <NavLink to={`/products/${id}`}>
        <Button buttonStyle="moreInfo">More Info</Button>
      </NavLink>
      <Card.Body className='d-flex flex-column align-items-center justify-content-between'>
        <div className='mb-3 w-100 px-3'>
          <Card.Title style={{ fontWeight:"bolder" }}>{name}</Card.Title>
          <Card.Text className='d-flex justify-content-end align-items-center w-100'>
            <span style={{
              fontSize:"24px",
              marginLeft:"8px"
            }}>{FormatCurrency(price)}</span>
          </Card.Text>
        </div>
        <ItemAddButton id={id} sizes={sizes}></ItemAddButton>
      </Card.Body>
    </Card>
  );
}
  