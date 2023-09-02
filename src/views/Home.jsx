import { Container } from "react-bootstrap";
import { Button } from "../components/Button";
import { HeroCarousel } from "../components/HeroCarousel";
import { NavLink } from "react-router-dom"
import data from "../data/StoreItems.json";


export function Home() {
  const shoe = data[0]

  return (
    <>
      <Container className="d-flex flex-sm-row flex-column align-items-center gap-2" style={{
            height: "clamp(500px, 50vw, 900px)",
            backgroundColor: "#F6F6F6"   }}>
          <div className="d-flex flex-column align-items-start gap-sm-5 w-25" style={{minWidth:"190px"}}>
            <h1 style={{fontSize: "clamp(1rem, calc(1.2rem + 1.25vw), 5rem)" }}>Air Jordan 1 Retro</h1>
            <h4 className="d-none d-sm-block" style={{fontSize:"clamp(1rem, calc(1.1rem + .3vw), 2rem)"}}>The 1 that started it all</h4>
            <div className="d-flex flex-sm-row flex-column align-items-center justify-content-evenly mt-4 gap-1" style={{width:"100%"}}>
                <NavLink to="/products/1"><Button buttonStyle="CTA">Buy now</Button></NavLink>
                <NavLink to="/products"><Button buttonStyle="CTA">Explore</Button></NavLink>
            </div>
          </div>
          <HeroCarousel carouselWidth="w-75" shoe={shoe}></HeroCarousel>
      </Container>
      <div className="App">designed by Agustin Rabino</div>
    </>
  );
}
