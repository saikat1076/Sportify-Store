import React from "react";
import { FaFootballBall, FaBasketballBall, FaDumbbell, FaRunning } from "react-icons/fa";
import { Fade, Zoom } from "react-awesome-reveal";

const SportsGearSection = () => {
  const popularProducts = [
    {
      id: 1,
      name: "Pro Football",
      icon: <FaFootballBall />,
      description: "High-quality football for matches.",
      image: "https://source.unsplash.com/1600x900/?football",
    },
    {
      id: 2,
      name: "All-Court Basketball",
      icon: <FaBasketballBall />,
      description: "Durable basketball for all surfaces.",
      image: "https://source.unsplash.com/1600x900/?basketball",
    },
    {
      id: 3,
      name: "Deluxe Fitness Mat",
      icon: <FaRunning />,
      description: "Comfortable mat for your workouts.",
      image: "https://source.unsplash.com/1600x900/?fitness",
    },
    {
      id: 4,
      name: "Adjustable Dumbbells",
      icon: <FaDumbbell />,
      description: "Perfect for strength training.",
      image: "https://source.unsplash.com/1600x900/?dumbbells",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-16 px-6">
      {/* Header Section */}
      <div className="text-center text-white mb-12">
        <Zoom>
          <h2 className="text-5xl font-extrabold mb-4">Gear Up for Your Game</h2>
        </Zoom>
        <Fade delay={200}>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto">
            Discover the finest sports equipment tailored for champions like you!
          </p>
        </Fade>
      </div>

      {/* Product Sections */}
      {popularProducts.map((product) => (
        <div key={product.id} className="mb-16">
          <Fade delay={300}>
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-center p-6">
                <div>
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h4 className="text-3xl font-semibold mb-2">{product.name}</h4>
                  <p className="text-lg">{product.description}</p>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      ))}
    </section>
  );
};

export default SportsGearSection;
