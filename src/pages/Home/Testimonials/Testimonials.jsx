import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
import { AiFillThunderbolt } from "react-icons/ai";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading="-----What Our Clients Say-----"
        heading="Testimonials"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review => <SwiperSlide
                key={review._id}
            >
                <div className="flex flex-col items-center mx-24 my-18">
                <Rating

      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                    <AiFillThunderbolt className="mt-6 text-5xl"/>
                    <p className="py-8">{review.details}</p>
                    <h3 className="text-3xl text-orange-500 ">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
