import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import ChefTable from '../ChefTable/ChefTable';
import Featured from '../Featured/Featured';
import ContactInfo from '../ContactInfo/ContactInfo';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <ChefTable/>
            <PopularMenu/>
            <ContactInfo/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;