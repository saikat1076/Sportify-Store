import React from 'react';
import { Helmet } from 'react-helmet'; // For setting page metadata
import { Link } from 'react-router-dom'; // For navigation links
import { FaCheckCircle } from 'react-icons/fa'; // For adding icons to the page

const TermsAndConditions = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Helmet>
                <title>Terms and Conditions - Sportify Shop</title>
                <meta name="description" content="Terms and conditions for Sportify Shop" />
            </Helmet>
            
            <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
                {/* Header with Shop Name */}
                <h1 className="text-3xl font-extrabold text-gray-800 text-center">Terms and Conditions of Sportify Shop</h1>
                <p className="text-center text-lg text-gray-600 my-4">Please read these terms and conditions carefully before using our service at Sportify Shop.</p>
                
                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
                    <p className="text-gray-600 mt-2">
                        By accessing or using Sportify Shop, you agree to be bound by these Terms and Conditions and our Privacy Policy.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800">2. User Obligations</h2>
                    <p className="text-gray-600 mt-2">
                        Users are responsible for maintaining the confidentiality of their account and for all activities under their account.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800">3. Prohibited Uses</h2>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>Using the service for illegal activities.</li>
                        <li>Violating any third-party rights.</li>
                        <li>Interfering with the proper functioning of the website.</li>
                    </ul>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800">4. Limitation of Liability</h2>
                    <p className="text-gray-600 mt-2">
                        Sportify Shop is not liable for any damages resulting from your use or inability to use our website, services, or products.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800">5. Changes to the Terms</h2>
                    <p className="text-gray-600 mt-2">
                        We reserve the right to modify or revise these terms at any time without prior notice. You are responsible for reviewing the latest version of these terms.
                    </p>
                </section>

                <div className="mt-8 text-center">
                    <Link to="/" className="text-blue-500 hover:text-blue-700 font-semibold">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
