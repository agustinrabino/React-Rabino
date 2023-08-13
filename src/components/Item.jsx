import Card from 'react-bootstrap/Card';
import { FormatCurrency } from '../utilities/FormatCurrency';
import { ItemAddButton } from './ItemAddButton';


export function Item({id, name, info, price, imgUrl}) {

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
        <ItemAddButton id={id}></ItemAddButton>
      </Card.Body>
    </Card>
  );
}
  