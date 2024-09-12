import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center rounded-3xl items-center bg-teal-500">
      
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"
            />
          </div>

         
          <div>
            <button
              type="submit"
              className="w-full bg-teal-800 text-white p-2 rounded-md hover:bg-teal-900 transition-colors duration-200"
            >
              Sign In
            </button>
          </div>
        </form>


        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link 
          to={"/auth/signup"}
          className="text-teal-800 font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn ;
