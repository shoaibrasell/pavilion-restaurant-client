import React from "react";
import { Parallax } from 'react-parallax';


const Cover = ({ img , title }) => {
  return (
    // Added a New things React Parallax from react 
    <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div
      className="hero h-[600px]"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5 uppercase">
            Would you like to try abish?
          </p>
        </div>
      </div>
    </div>
    </Parallax>
    
  );
};

export default Cover;
