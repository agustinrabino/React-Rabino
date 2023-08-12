import Carousel from 'react-bootstrap/Carousel';
import jordan1 from "../assets/jordan1.jpg";
import jordan2 from "../assets/jordan2.jpg";
import jordan3 from "../assets/jordan3.jpg";

export function HeroCarousel() {
  return (
    <Carousel className='d-flex' style={{
                        width:"70%",
                        height:"inherit"  }}>
      <Carousel.Item className=''>
        <img src={jordan1} className='' style={{
                              objectFit:"contain",
                              width:"100%"  }}alt="" />
      </Carousel.Item>
      <Carousel.Item className=''>
        <img src={jordan2} className='' style={{
                              objectFit:"contain",
                              width:"100%"  }}alt="" />
      </Carousel.Item>
      <Carousel.Item className=''>
        <img src={jordan3} className='' style={{
                              objectFit:"contain",
                              width:"100%"  }}alt="" />
      </Carousel.Item>
    </Carousel>
  );
}
