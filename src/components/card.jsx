import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartcontext";
import { useContext } from "react";

function Card({ value }) {
  const { additemcart, isItemAdded } = useContext(CartContext);
  const { thumbnail, category, title, price } = value;
  return (
    <>
      <div
        className="lg:w-1/4 md:w-1/2 p-4 w-full border border-teal-800  m-6 "
      >
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
         
          <button
            onClick={() => {
              additemcart(value);
            }}
            className="py-2 text-white rounded-lg bg-teal-700 px-16 mt-2"
          >
            {isItemAdded(value.id)
              ? `Added (${isItemAdded(value.id).quantity})`
              : `Add to cart`}
          </button>
          <div className="my-4">
          <Link 
         className="bg-teal-700 py-3 text-white rounded-md  px-24"
         to={`/product/${value.id}`}>
         See Details
         </Link>
         
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
