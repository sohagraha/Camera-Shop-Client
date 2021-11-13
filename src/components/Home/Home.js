import React from 'react';
import AllProducts from '../AllProduct/AllProducts/AllProducts';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import About from '../Extra1/About';
import Footer from '../Footer/Footer';
import Reviews from '../Review/Reviews/Reviews';

const Home = () => {
    return (
        // Header with Banner and services 
        <div>
            <Banner></Banner>
            <AllProducts></AllProducts>

            <Reviews></Reviews>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;