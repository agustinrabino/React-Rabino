import { Container } from "react-bootstrap";
import { Button } from "../components/Button";
import { HeroCarousel } from "../components/HeroCarousel";
import { NavLink } from "react-router-dom"
import "./Home.css"

export function Home() {
  return (
    <>
      <Container className="heroSection">
          <div className="heroInfo">
            <h1>Air Jordan 1 Retro</h1>
            <h4>The 1 that started it all</h4>
            <div className="CTA-div">
                <NavLink to="/shoppingcart"><Button buttonStyle="CTA">Buy now</Button></NavLink>
                <NavLink to="/sales"><Button buttonStyle="CTA" to="/categories" as={NavLink}>Explore</Button></NavLink>
            </div>
          </div>
          <HeroCarousel></HeroCarousel>
      </Container>
      <div className="App">
      </div>
    </>
  );
}
