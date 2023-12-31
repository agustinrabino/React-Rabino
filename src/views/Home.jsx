import { Container } from "react-bootstrap";
import { MyButton } from "../components/MyButton";
import { HomeHeroCarousel } from "../components/HomeHeroCarousel";
import { NavLink } from "react-router-dom"
import { useGetDocByID } from "../hooks/useGetDocByID";
import { ItemLoading } from "../components/ItemLoading";


export function Home() {
  const idHome="z3Hiyv9VRL2JFmLROCi9"
  const {storeItem} = useGetDocByID(idHome)

  return (
    <>
      {storeItem === undefined ? (<ItemLoading />) : (
      <Container className="d-flex flex-sm-row flex-column align-items-center gap-2" style={{
            height: "clamp(500px, 50vw, 900px)",
            backgroundColor: "#F6F6F6"   }}>
          <div className="d-flex flex-column align-items-start gap-sm-5 w-25" style={{minWidth:"190px"}}>
            <h1 style={{fontSize: "clamp(1rem, calc(1.2rem + 1.25vw), 5rem)" }}>Air Jordan 1 Retro</h1>
            <h4 className="d-none d-sm-block" style={{fontSize:"clamp(1rem, calc(1.1rem + .3vw), 2rem)"}}>The 1 that started it all</h4>
            <div className="d-flex flex-sm-row flex-column align-items-center justify-content-evenly mt-4 gap-1" style={{width:"100%"}}>
                <NavLink to={`/products/${idHome}`}><MyButton buttonStyle="CTA">Buy now</MyButton></NavLink>
                <NavLink to="/products"><MyButton buttonStyle="CTA">Explore</MyButton></NavLink>
            </div>
          </div>
          <HomeHeroCarousel carouselWidth="w-75" shoe={storeItem}></HomeHeroCarousel>
      </Container>)}
      <div className="App">designed by Agustin Rabino</div>
    </>
  );
}
