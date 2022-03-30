import React from 'react';
import { Container, Wrapper} from './styles';
import Product from "../Product/index"
import Header from '../Header';
import Footer from '../Footer'
const Layout: React.FC = () => {
    return(
        <Container>
            <Header/>
            <Wrapper> 
                <Product/>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Layout;

{/* Wrapper: responsavel por envolver o conteudo */}





