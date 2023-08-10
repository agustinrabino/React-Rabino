import Card from 'react-bootstrap/Card';
import { ItemCount } from './ItemCount';
import './Item.css'

export function Item({name, info, price, imgUrl}) {
  return (
    <Card border="dark" style={{ height: '520px' }}>
      <Card.Img variant="top" src={imgUrl} className='cardItemImg' />
      <Card.Body className='cardItemBody' style={{justifyContent:"space-between" }}>
        <div>
          <Card.Title style={{ fontWeight:"bolder" }}>{name}</Card.Title>
          <Card.Text className='cardItemData'>
            <span>{info}</span>
            <span>{price}</span>
          </Card.Text>
        </div>
        <ItemCount className='cardItemButton'></ItemCount>
      </Card.Body>
    </Card>
  );
}
