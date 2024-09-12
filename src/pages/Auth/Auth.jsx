import React from "react";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div className="min-h-screen rounded-3xl flex flex-col justify-center items-center bg-teal-500">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Auth Page</h1>

      <Link 
      className="bg-teal-800 text-white px-6 py-3 rounded-md hover:bg-teal-900 transition-colors duration-200 mb-4" 
      to={"/auth/signup"}
      >
        Go to Sign Up
        
      </Link>

      <Link
       className="bg-teal-800 text-white px-6 py-3 rounded-md hover:bg-teal-900 transition-colors duration-200"
       to={"/auth/signin"}
       >
        Go to Sign In
      </Link>
    </div>
  );
}

export default Auth;
