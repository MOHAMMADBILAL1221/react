import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Imagegalery = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const closePopup = () => {
    setSelectedCard(null);
  };

  const arr = [
    {
      title: "Macbook",
      img: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
      price: "$2855",
      id: 1,
    },
    {
      title: "Macbook White",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2h21dGSI9E33IeHG28dmecWHwWfG9yPMB5EtzqxqADT3mLeEn_RYXtJ8Cbwcsbvzy8I&usqp=CAU",
      price: "$10000",
      id: 2,
    },
    {
      title: "Macbook Black",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-lgECPl0VOU1uNTpI4kmLT-GYCFu_dFPlQo-Cenr41Eh1iaaXkITLcqeI2mbOrlnXjw&usqp=CAU",
      price: "$12947",
      id: 3,
    },
    {
      title: "Macbook Silver",
      img: "https://images.unsplash.com/photo-1606248896999-387b3a9f621c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hY2Jvb2slMjBhaXJ8ZW58MHx8MHx8fDA%3D",
      price: "$3447",
      id: 4,
    },
    {
      title: "Samsung",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzZyEgKgt-FUHSjvjzYdSsJk2x1GPhTfDxc4VKQ2jy1RuFddz6gUWll0caNVHCW20Tiiw&usqp=CAU",
      price: "$2000",
      id: 5,
    },
    {
      title: "Samsung Mobile",
      img: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$87643",
      id: 6,
    },
    {
      title: "google pixel",
      img: "https://www.zdnet.com/a/img/resize/0425340ae836e34d4ebb6e061996eb2893e63c35/2024/05/13/712393dc-6cc5-4b32-bf24-c42a9a153d0f/dsc00514.jpg?auto=webp&width=1280",
      price: "$1000000",
      id: 7,
    },
    {
      title: "vape",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qIDXg6I9lGlTegDWnQ1EtkmLrkfnE-98SmYWuzHKE5XcoTvUqlhAh2ArlKK4MBhzog8&usqp=CAU",
      price: "$208",
      id: 8,
    },
  ];
  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {arr.map((value) => (
            <div
              onClick={() => {
                setSelectedCard(value);
              }}
              key={value.id}
              className="lg:w-1/4 md:w-1/2 p-4 w-full"
            >
              <Link className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={value.img}
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The {value.title}
                </h2>
                <p className="mt-1">${value.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
            <img
              src={selectedCard.img}
              alt={selectedCard.title}
              className="w-full h-auto mb-4"
            />
            <p className="text-lg font-medium">Price: {selectedCard.price}</p>
            <button
              onClick={closePopup}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <iframe
        width="800"
        height="400"
        className="m-auto rounded-xl shadow-2xl hover:scale-105 transition-all ease-in-out border border-teal-700
        w-full h-[200px] sm:h-[300px] md:h-[400px] md:w-[700px] lg:w-[800px]"
        src="https://www.youtube.com/embed/Dwno4n37qos?si=pTVSHho7katUSF7d"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default Imagegalery;
