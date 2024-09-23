import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import ChefTable from "../ChefTable/ChefTable";
import Featured from "../Featured/Featured";
import ContactInfo from "../ContactInfo/ContactInfo";
import Testimonials from "../Testimonials/Testimonials";
import ChefRecon from "../ChefRecon/ChefRecon";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Pavilion | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <ChefTable />
      <PopularMenu />
      <ContactInfo />
      <ChefRecon />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
