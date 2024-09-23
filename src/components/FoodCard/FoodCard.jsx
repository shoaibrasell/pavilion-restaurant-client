import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Food" />
      </figure>
      <p className="absolute right-0 bg-slate-950 text-white mr-4 mt-4 px-4">${price}</p>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4 ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
