import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.jpg";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.jpg";
import img6 from "../../../assets/home/06.jpg";

const Banner = () => {
  return (
    <Carousel 
      autoPlay 
      infiniteLoop 
      interval={3000} 
    //   showThumbs={false} 
    //   showStatus={false} 
    //   dynamicHeight={false}
    //   showArrows={true}
    >
      <div>
        <img src={img1} style={{ objectFit: 'cover' }} />
      </div>
      <div>
        <img src={img2} style={{ objectFit: 'cover' }}/>
      </div>
      <div>
        <img src={img3} style={{  objectFit: 'cover' }}/>
      </div>
      <div>
        <img src={img4} style={{  objectFit: 'cover' }}/>
      </div>
      <div>
        <img src={img5} style={{ objectFit: 'cover' }}/>
      </div>
      <div>
        <img src={img6} style={{  objectFit: 'cover' }} />
      </div>
    </Carousel>
  );
};

export default Banner;
