import { Container } from "react-bootstrap";
import { Button } from "../components/Button";
import { HeroCarousel } from "../components/HeroCarousel";
import { ItemListContainer } from "../components/ItemListContainer";
import "./Home.css"

export function Home() {
  return (
    <>
      <Container className="heroSection">
          <div className="heroInfo">
            <h1>Retro Jordan OG</h1>
            <h4>The 1 that started it all</h4>
            <div className="CTA-div">
                <Button buttonStyle="CTA">Buy now</Button>
                <Button buttonStyle="CTA">Explore</Button>
            </div>
          </div>
          <HeroCarousel></HeroCarousel>
      </Container>
      <div className="App">
          <ItemListContainer greeting="2" />
      </div>
    </>
  );
}
