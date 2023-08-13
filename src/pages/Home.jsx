import { Container } from "react-bootstrap";
import { Button } from "../components/Button";
import { HeroCarousel } from "../components/HeroCarousel";
import { NavLink } from "react-router-dom"
import { SearchBar } from "../components/SearchBar";
import data from "../data/StoreItems.json";


export function Home() {
  const shoe = data[0]

  return (
    <>
      <Container className="d-flex gap-2" style={{
            height: "clamp(300px, 50vw, 700px)",
            backgroundColor: "#F6F6F6"   }}>
          <div className="d-flex flex-column justify-content-center align-items-start gap-5 w-25" style={{minWidth:"190px"}}>
            <h1 style={{fontSize: "clamp(1rem, calc(1.2rem + 1.25vw), 5rem)" }}>Air Jordan 1 Retro</h1>
            <h4 style={{fontSize:"clamp(1rem, calc(1.1rem + .3vw), 2rem)"}}>The 1 that started it all</h4>
            <div className="d-flex justify-content-evenly mt-4" style={{width:"100%"}}>
                <NavLink to="/products/1"><Button buttonStyle="CTA">Buy now</Button></NavLink>
                <NavLink to="/products"><Button buttonStyle="CTA">Explore</Button></NavLink>
            </div>
          </div>
          <HeroCarousel carouselWidth="w-75" shoe={shoe}></HeroCarousel>
      </Container>
      <div className="App">
        <SearchBar></SearchBar>
      </div>
    </>
  );
}
