import Carousel from 'react-bootstrap/Carousel';
import jordan1 from "../assets/jordan1.jpg";
import jordan2 from "../assets/jordan2.jpg";
import jordan3 from "../assets/jordan3.jpg";
import "./HeroCarousel.css"

export function HeroCarousel() {
  return (
    <Carousel className='heroCarousel'>
      <Carousel.Item className='heroSlide'>
        <img src={jordan1} className='heroImg' alt="" />
      </Carousel.Item>
      <Carousel.Item className='heroSlide'>
        <img src={jordan2} className='heroImg' alt="" />
      </Carousel.Item>
      <Carousel.Item className='heroSlide'>
        <img src={jordan3} className='heroImg' alt="" />
      </Carousel.Item>
    </Carousel>
  );
}
