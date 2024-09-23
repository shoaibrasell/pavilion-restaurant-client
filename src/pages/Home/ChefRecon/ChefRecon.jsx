import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';

const ChefRecon = () => {
  const cardsData = [
    {
      title: "Special Dish 1",
      imgSrc: slide1,
      description: "This is a delicious dish you must try!",
    },
    {
      title: "Special Dish 2",
      imgSrc: slide2,
      description: "Our chef recommends this amazing meal!",
    },
    {
      title: "Special Dish 3",
      imgSrc: slide3,
      description: "A perfect blend of flavors for a great experience!",
    },
  ];

  return (
    <section>
      <SectionTitle subHeading="Should Try" heading="Chef Recommends" />
      <div className="flex justify-center gap-x-10 p-10 m-10">
        {cardsData.map((card, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-xl">
            <figure className="h-48">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {card.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{card.description}</p>
              <div className="card-actions justify-end">
              </div>
              {/* Button with controlled border length */}
              <button className="btn btn-outline border-0 border-b-4 mt-4">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChefRecon;
