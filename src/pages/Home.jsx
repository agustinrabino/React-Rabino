import { Container } from "react-bootstrap";
import { Button } from "../components/Button";
import { HeroCarousel } from "../components/HeroCarousel";
import { NavLink } from "react-router-dom"
import { SearchBar } from "../components/SearchBar";

export function Home() {
  return (
    <>
      <Container className="d-flex" style={{
            height: "clamp(300px, 50vw, 700px)",
            backgroundColor: "#F6F6F6"   }}>
          <div className="d-flex flex-column justify-content-center align-items-start gap-5" style={{ width:"30%" }}>
            <h1 style={{fontSize: "clamp(1rem, calc(1.2rem + 1.25vw), 5rem)" }}>Air Jordan 1 Retro</h1>
            <h4 style={{fontSize:"clamp(1rem, calc(1.1rem + .3vw), 2rem)"}}>The 1 that started it all</h4>
            <div className="d-flex justify-content-evenly mt-4" style={{width:"100%"}}>
                <NavLink to="/shoppingcart"><Button buttonStyle="CTA">Buy now</Button></NavLink>
                <NavLink to="/sales"><Button buttonStyle="CTA">Explore</Button></NavLink>
            </div>
          </div>
          <HeroCarousel></HeroCarousel>
      </Container>
      <div className="App">
        <SearchBar></SearchBar>
      </div>
    </>
  );
}
