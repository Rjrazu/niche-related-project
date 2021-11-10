import React from 'react';
import Contact from '../../Shared/Contact/Contact';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import WelcomeNote from '../WelcomeNote/WelcomeNote';
import Feedback from '../Feedback/Feedback';


const Home = () => {
    return (
        <div>
            <Banner />
            <WelcomeNote />
            <Products />
            <Feedback />
            <Contact />
        </div>
    );
};

export default Home;