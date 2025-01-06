import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import Lottie from 'lottie-react';
import errorAnimation from '../assets/Animation - 1736194893446.json'; // Make sure to replace with a valid path

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-12 px-6">
      {/* Lottie Animation for 404 */}
      <div className="mb-8 w-72 h-72 sm:w-96 sm:h-96">
        <Lottie
          animationData={errorAnimation} // Path to your animation JSON file
          loop={true}
          className="w-full h-full"
        />
      </div>

      {/* Error Heading */}
      <Fade delay={300}>
        <h2 className="text-5xl font-extrabold text-red-500 mb-4">Oops!!!</h2>
      </Fade>
      
      {/* Subheading */}
      <Zoom delay={500}>
        <h3 className="text-3xl font-semibold text-blue-500 mb-4">404 Page Not Found</h3>
      </Zoom>

      {/* Error Message */}
      <Fade delay={700}>
        <p className="text-lg text-gray-700 mb-6">The page you are looking for might have been moved or deleted.</p>
      </Fade>

      {/* Button to Redirect */}
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all"
      >
        Go to Homepage
      </a>
    </div>
  );
};

export default ErrorPage;
