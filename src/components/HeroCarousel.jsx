import Carousel from 'react-bootstrap/Carousel';


export function HeroCarousel({carouselWidth, shoe}) {
  return (
    <Carousel className={` ${carouselWidth}`} style={{ height: "clamp(300px, 50vw, 700px)" }}>
      <Carousel.Item className="w-100" style={{ height: "clamp(300px, 50vw, 700px)" }}>
        <img src={shoe.imgUrl} className='' style={{
                              objectFit:"contain",
                              height:"100%",
                              width:"100%"  }}alt="" />
      </Carousel.Item>
      <Carousel.Item className="w-100" style={{ height: "clamp(300px, 50vw, 700px)" }}>
        <img src={shoe.imgUrl2} className='' style={{
                              objectFit:"contain",
                              height:"100%",
                              width:"100%"  }}alt="" />
      </Carousel.Item>
      <Carousel.Item className="w-100" style={{ height: "clamp(300px, 50vw, 700px)" }}>
        <img src={shoe.imgUrl3} className='' style={{
                              objectFit:"contain",
                              height:"100%",
                              width:"100%"  }}alt="" />
      </Carousel.Item>
    </Carousel>
  );
}
