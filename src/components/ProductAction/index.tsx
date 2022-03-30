import React from 'react';

import {
    Container,
    Condition,
    Row,
    HeartIcon,
    DispatchTag,
    PriceCard,
    PriceRow,
    InstallmentsInfo,
    StockStatus,
    MethodCard,
    CheckIcon,
    Actions,
    Button,
    Benefits,
    ShieldIcon
} from './styles';

const ProductAction: React.FC = () => {
    return(
        <Container>
            <Condition>Novo | 1450 vendidos</Condition>

            <Row>
                Camisa da banda Angra
                <HeartIcon/>
            </Row>

            <DispatchTag>Enviando normalmente</DispatchTag>

            <PriceCard>
                <PriceRow>
                    <span className="symbol">R$</span>
                    <span className="fraction">69</span>
                    <span className="cents">99</span>
                </PriceRow>

                <InstallmentsInfo>em 3x de R$ 23,30</InstallmentsInfo>
            </PriceCard>

            <StockStatus>Estoque disponivel</StockStatus>

            <MethodCard>
                <CheckIcon/>

                <div>
                    <span className="title">Frete gratis</span>
                    <span className="details"> Beneficios maluco</span>
                    <a href="#">Ver mais opcoes</a>
                </div>
            </MethodCard>

            <Actions>
                <Button solid>Comprar agora</Button>
                <Button>Adicionar ao carrinho</Button>
            </Actions>

            <Benefits>
                <li>
                    <ShieldIcon/>
                    Compra garantida, receba o produto que esta esperando ou devolvemos o dinheiro
                </li>
            </Benefits>
        </Container>
    );
};


export default ProductAction;