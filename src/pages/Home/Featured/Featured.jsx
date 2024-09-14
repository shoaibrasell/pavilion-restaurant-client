import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css';

const Featured = () => {
  return (
    <div className="Featured-item text-white bg-fixed pt-8 mt-20 mb-12">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-400 bg-opacity-20 pb-28 pt-12 px-36">
        <div>
            <img src={featuredImg}/>
        </div>
        <div className="md:ml-10 text-white">
            <p>Aug 20 , 2024</p>
            <p>Where can i get some?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia porro dolores facilis officia molestiae! Placeat impedit itaque laudantium enim iste dolor officia, debitis sint quas maxime labore ea officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laborum iure quod,  </p>
            <button className="btn btn-outline  border-0 border-b-4 ">Order Now </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
