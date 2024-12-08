import React from "react";
import { FaFootballBall, FaBasketballBall, FaDumbbell, FaRunning } from "react-icons/fa";

const FeaturedSportsSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Sports</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find the best gear for your favorite sports. Whether you love football, basketball, or fitness,
          we have everything you need to excel.
        </p>
      </div>

      {/* Sports List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Football */}
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
          <FaFootballBall className="text-6xl text-blue-600 mb-4" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Football</h4>
          <p className="text-gray-600 mb-4">Get your game on with top-notch football gear designed for all levels.</p>
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all">
            Shop Football Gear
          </button>
        </div>

        {/* Basketball */}
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
          <FaBasketballBall className="text-6xl text-orange-600 mb-4" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Basketball</h4>
          <p className="text-gray-600 mb-4">Elevate your game with basketballs and accessories for every player.</p>
          <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition-all">
            Shop Basketball Gear
          </button>
        </div>

        {/* Fitness */}
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
          <FaDumbbell className="text-6xl text-gray-800 mb-4" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Fitness</h4>
          <p className="text-gray-600 mb-4">Find the best fitness equipment for your strength and conditioning routines.</p>
          <button className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all">
            Shop Fitness Gear
          </button>
        </div>

        {/* Running */}
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
          <FaRunning className="text-6xl text-green-600 mb-4" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Running</h4>
          <p className="text-gray-600 mb-4">Discover top-rated running shoes and accessories to improve your performance.</p>
          <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-all">
            Shop Running Gear
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSportsSection;
