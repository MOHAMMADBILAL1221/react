import React from "react";
import Section from "../components/section";
import Steps from "../components/step";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

function Home() {
  return (
    <>
      {/* className="my-20 m-auto"
     width={800} */}
      <Section />
      <Steps />
      <button className="px-20 py-4  bg-teal-800 rounded-md text-white font-bold">
        <Link to={"product"}>See Products.....</Link>
      </button>
      <div className="my-5">
        <iframe
          className="m-auto rounded-xl shadow-2xl hover:scale-105 transition-all ease-in-out border border-teal-700
               w-full h-[200px] sm:h-[300px] md:h-[400px] md:w-[700px] lg:w-[800px]"
          src="https://www.youtube.com/embed/4FIIgU8gV5Y?si=gUQxEqPrvbwrfcOT"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        />
      </div>
    </>
  );
}

export default Home;
