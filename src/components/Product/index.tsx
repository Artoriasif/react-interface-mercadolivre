import React from 'react';
import { Container, Row, Panel, Column, Gallery, Section, Description} from "./styles"
import camisa from "../../assets/camisa.jpg"
import SellerInfo from "../SellerInfo";
import ProductAction from '../ProductAction'


const Product: React.FC = () => {
    return(
        <Container>
            <Row>
                <a href="#">Compartilhar</a>
                <a href="#">Vender um igual</a>
            </Row>
            <Panel>
                <Column>
                    <Gallery>
                        <img alt="Camisa de banda" src={camisa}/>
                    </Gallery>  
                    <Info/>

                </Column>
                <Column>
                    <ProductAction/>
                    <SellerInfo/>

                    <WarrantySection/>
                    <WarrantySection/>
                    <WarrantySection/>
                </Column>
            </Panel>
        </Container>
        
    )
}

const WarrantySection = () => (

    <Section>
        <h4>Garantia</h4>

    <div>
        <span>
            <p className="title">Compra garantida maluca</p>
            <p className="description">
                Receba o produto que esta esperando ou devolvemos o seu dinheiro
            </p>
        </span>
         <span>
            <p className="title">Garantia do vendedor</p>
            <p className="description">
                Sem garantia
            </p>
        </span>
    </div>

    <a href="#">Saiba mais sobre a garantia</a>
    </Section>
)
const Info = () => (
    <Description>
        <h2>Descricao</h2>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque itaque dignissimos facilis odit 
            nemo natus error, iste pariatur autem dicta asperiores optio nulla, quisquam,
            veniam similique veritatis nam inventore ab! Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Tenetur, excepturi soluta! Quo animi architecto quis odit ipsa.
            Tempora, odio quibusdam. Enim, alias voluptate repellat sequi unde perferendis
            sint animi ipsam.
            <br/>
            <br/>
            Intes inclusos: <br/>
            - x LED <br/>
            - x LED <br/>
            - x LED <br/>
            - x LED <br/>
            - x LED <br/>
            <br/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quis enim quasi, obcaecati asperiores
            laudantium dolorem soluta iure consequuntur itaque ab sed sequi aliquid facilis architecto odit,
            necessitatibus animi maxime.
        </p>
    </Description>
)

export default Product;
