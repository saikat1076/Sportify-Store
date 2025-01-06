import React from "react";
import { FaFootballBall, FaBasketballBall, FaDumbbell, FaRunning } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const FeaturedSportsSection = () => {
  return (
    <section className="bg-gray-100 my-6 lg:px-5">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Sports</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find the best gear for your favorite sports. Whether you love football, basketball, or fitness,
          we have everything you need to excel.
        </p>
      </div>

      {/* Sports List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Football */}
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all flex flex-col justify-between">
          <FaFootballBall className="mx-auto text-8xl text-blue-600 mb-4" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Football</h4>
          <p className="text-gray-600 mb-4">Get your game on with top-notch football gear designed for all levels.</p>
          <Link
            to="/all-equipment" // Updated query parameter to match the category name
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all mt-auto"
          >
            Shop Football Gear
          </Link>
        </div>

        {/* Basketball */}
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all flex flex-col justify-between">
          <FaBasketballBall className="text-8xl mx-auto text-orange-600 mb-4" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Basketball</h4>
          <p className="text-gray-600 mb-4">Elevate your game with basketballs and accessories for every player.</p>
          <Link
            to="/all-equipment" // Updated query parameter to match the category name
            className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition-all mt-auto"
          >
            Shop Basketball Gear
          </Link>
        </div>

        {/* Fitness */}
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all flex flex-col justify-between">
          <FaDumbbell className="mx-auto text-8xl text-gray-800 mb-4" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Fitness</h4>
          <p className="text-gray-600 mb-4">Find the best fitness equipment for your strength and conditioning routines.</p>
          <Link
            to="/all-equipment" // Updated query parameter to match the category name
            className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all mt-auto"
          >
            Shop Fitness Gear
          </Link>
        </div>

        {/* Running */}
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all flex flex-col justify-between">
          <FaRunning className="mx-auto text-8xl text-green-600 mb-4" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Running</h4>
          <p className="text-gray-600 mb-4">Discover top-rated running shoes and accessories to improve your performance.</p>
          <Link
            to="/all-equipment" // Updated query parameter to match the category name
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-all mt-auto"
          >
            Shop Running Gear
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSportsSection;
