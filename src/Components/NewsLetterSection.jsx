import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import Lottie from 'lottie-react';
import newsletterAnimation from '../assets/Animation - 1736192607958.json'; // Your Lottie animation file

const NewsletterSection = () => {
  return (
    <section className="bg-[#71e1fe] py-10 px-4 sm:px-6">
      <div className="text-center text-white mb-8">
        {/* Zoom Animation for Header */}
        <Zoom delay={100}>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Stay Ahead with Sportify</h2>
        </Zoom>

        {/* Fade Animation for Subheading */}
        <Fade delay={200}>
          <p className="text-base lg:text-lg max-w-2xl mx-auto">
            Join our newsletter and be the first to get the latest updates, product launches, and exclusive offers from Sportify!
          </p>
        </Fade>
      </div>

      {/* Lottie Animation for Newsletter Illustration */}
      <div className="flex justify-center mb-8">
        <Lottie
          animationData={newsletterAnimation} // Lottie JSON animation
          loop
          className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
        />
      </div>

      {/* Input and Button */}
      <div className="max-w-lg mx-auto mb-6">
        <Fade delay={300}>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-2 w-full sm:w-80 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="px-5 py-2 w-full sm:w-auto bg-yellow-400 text-white font-semibold rounded-full hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
            >
              Subscribe Now
            </button>
          </div>
        </Fade>
      </div>

      {/* Benefits Section */}
      <div className="text-center text-white mt-6">
        <Fade delay={400}>
          <p className="text-sm mb-4">
            No spam, just the latest and greatest news, products, and promotions from Sportify.
          </p>
        </Fade>

        <div className="mt-6 text-center">
          <Zoom delay={500}>
            <h3 className="text-xl font-bold mb-4">Why Subscribe?</h3>
          </Zoom>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white text-center p-5 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Exclusive Deals</h4>
              <p className="text-gray-600">Get access to discounts and special promotions before anyone else.</p>
            </div>
            <div className="bg-white text-center p-5 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Latest Products</h4>
              <p className="text-gray-600">Be the first to know about new sports gear and equipment.</p>
            </div>
            <div className="bg-white text-center p-5 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Personalized Recommendations</h4>
              <p className="text-gray-600">Receive product suggestions tailored to your interests and preferences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
