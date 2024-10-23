import React from "react";
import { Link } from "react-router-dom";

function  Card({ value }) {
  const {thumbnail, category , title ,price} = value
  return (
    <>
    <Link to={`/product/${value.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-teal-800  m-6 " >
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={thumbnail}
          />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
        </h2>
        <p className="mt-1">${price}</p>
        <button className="py-2 text-white rounded-lg bg-teal-700 px-16 mt-2">Add to Cart</button>
      </div>
    
    </Link>
          </>
  );
}

export default Card;
