import { Container } from "react-bootstrap";
import { HeroCarousel } from "./HeroCarousel";
import { ItemButton } from "./ItemButton";

export function ItemDetails({item}) {
    return(
        <Container key={item.id} className="d-flex  flex-md-row flex-column align-items-center gap-3" style={{
            height: "100%",
            width:"100%",
            backgroundColor: "#F6F6F6"   }}>
            <HeroCarousel carouselWidth="w-md-50 w-100" shoe={item}></HeroCarousel>
            <div className="d-flex flex-column justify-content-center align-items-start gap-5 w-100 w-md-50 px-2 py-5">
                <h2>{item.name}</h2>
                <p >{item.info}</p>
                <div className="d-flex justify-content-evenly w-100 mt-auto">
                    <ItemButton id={item.id} sizes={item.sizes} stock={item.stock}></ItemButton>
                </div>
            </div>
        </Container>
    )
}