import React from 'react';
import Contact from '../Contact/Contact';
import FooterContainer from '../../ShareComponents/FooterContainer/FooterContainer';
import Header from '../Header/Header';
import ProductContainer from '../ProductContainer/ProductContainer';
import ReviwsContainer from '../ReviwsContainer/ReviwsContainer';
import WhychoosUsContainer from '../WhychoosUsContainer/WhychoosUsContainer';

const Home = () => {
    return (
        <div>
            <Header />
            <WhychoosUsContainer />
            <ProductContainer />
            <ReviwsContainer />
            <Contact />
            <FooterContainer />
        </div>
    );
};

export default Home;