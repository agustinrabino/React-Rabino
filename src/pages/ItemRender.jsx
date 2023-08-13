import { Container } from "react-bootstrap";
import { HeroCarousel } from "../components/HeroCarousel";
import data from "../data/StoreItems.json"
import { useParams } from "react-router-dom";
import { ItemAddButton } from "../components/ItemAddButton";

export function ItemRender() {

    const { ID } = useParams()

    return(
        data.map(item => {
            if (item.id == ID) {
                return(
                    <Container className="d-flex" style={{
                        height: "100%",
                        width:"100%",
                        backgroundColor: "#F6F6F6"   }}>
                        <HeroCarousel carouselWidth="w-50" shoe={item}></HeroCarousel>
                        <div className="d-flex flex-column justify-content-center align-items-start gap-5 w-50 px-2 py-5">
                            <h2>{item.name}</h2>
                            <p >{item.info}</p>
                            <div className="d-flex justify-content-evenly w-100 mt-auto">
                                <ItemAddButton id={item.id} sizes={item.sizes}></ItemAddButton>
                            </div>
                        </div>
                    </Container>
                )
            }}
      ));
}