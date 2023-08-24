import Carousel from 'react-bootstrap/Carousel';

const styleCarouselImg={
  objectFit:"contain",
  height:"100%",
  width:"100%"  
}
const styleCarouselItem = { height: "clamp(300px, 50vw, 700px)" }

export function HeroCarousel({carouselWidth, shoe}) {
  return (
    <Carousel className={` ${carouselWidth}`} style={styleCarouselItem}>
      {shoe.url.map(i => (
        <Carousel.Item key={i} className="w-100" style={styleCarouselItem}>
        <img src={i} style={styleCarouselImg}alt="" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}