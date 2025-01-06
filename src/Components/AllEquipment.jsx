import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaStar, FaRegStar, FaSearch } from 'react-icons/fa'; // Importing search and star icons

const AllEquipment = () => {
    const products = useLoaderData(); // Loaded data
    const { _id } = useParams(); // ID from URL params
    const [sortPrice, setSortPrice] = useState(products); // State for sorted products
    const [searchQuery, setSearchQuery] = useState(''); // Search query state

    // Handle Sorting by Price
    const handleSortByPrice = () => {
        const sorted = [...sortPrice].sort((a, b) => {
            const priceA = parseFloat(a.price); // Use parseFloat in case of decimal prices
            const priceB = parseFloat(b.price);
            return priceA - priceB;
        });
        setSortPrice(sorted); // Set sorted products to state
    };

    // Filter products based on search query
    const filteredProducts = sortPrice.filter((item) => {
        return item.itemName.toLowerCase().includes(searchQuery.toLowerCase());
    });

    // Handle Delete (You should define the delete logic)
    const handleDelete = (id) => {
        console.log('Delete item with id:', id);
        // Logic to delete the item goes here, probably an API call
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl text-center font-bold mb-4">All Equipment</h1>
            
            {/* Flex Container for Search and Sort */}
            <div className="flex items-center justify-between mb-4">
                {/* Search Bar */}
                <div className="flex items-center space-x-2 border border-gray-300 rounded-md p-2 w-full ">
                    {/* Search Icon */}
                    <FaSearch className="text-gray-600" />
                    <input
                    
                        type="text"
                        placeholder="Search Equipment"
                        className="flex-1 p-2 outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Sort by Price Button */}
                <button
                    onClick={handleSortByPrice}
                    className="btn btn-primary text-sm font-semibold p-2 ml-4"
                >
                    Sort by Price
                </button>
            </div>

            {/* Equipment List Table */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {filteredProducts.map((item) => {
                        // Convert rating to a number, default to 0 if missing or invalid
                        const parsedRating = item.rating ? parseFloat(item.rating) : 0;
                        const fullStars = Math.floor(parsedRating); // Full stars (integer part)
                        const hasHalfStar = parsedRating % 1 !== 0; // Check for half star

                        return (
                            <div key={item._id}>
                                <div className="card w-full h-[460px] bg-[#C0FFB3] shadow-lg shadow-gray-400 glass rounded-lg mx-auto">
                                    <figure className="rounded-t-lg  overflow-hidden">
                                        <img
                                            src={item.Image}
                                            alt={item.itemName}
                                            className="w-full h-[250px] object-fill transform hover:scale-105 transition-transform duration-300"
                                        />
                                    </figure>
                                    <div className="card-body h-[280px] p-1">
                                        <div><h2 className="text-2xl font-bold mx-auto text-gray-800">{item.itemName}</h2>
                                      
                                      <p className="text-lg italic">Customization: with {item.customization}</p></div>
                                        <div className='flex mb-1 justify-between'>
                                            
                                        <div>
                                            <p className="text-xl font-bold text-gray-800">
                                                Price: <span className="text-[#0056D6]">{item.price}$</span>
                                            </p>
                                            <p
                                                className={`badge ${item.stockStatus === "In Stock" ? "badge-success" : "badge-error"} mt-2 text-xs font-medium`}
                                            >
                                                {item.stockStatus} stocks left
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            {[...Array(5)].map((_, index) => {
                                                if (index < fullStars) {
                                                    return <FaStar key={index} />;
                                                } else if (index === fullStars && hasHalfStar) {
                                                    return <FaStar key={index} className="opacity-50" />;
                                                } else {
                                                    return <FaRegStar key={index} />;
                                                }
                                            })}
                                            <p className="m-1 text-xs font-bold text-gray-600">{parsedRating.toFixed(1)}</p>
                                        </div>
                                         </div>
                                         <div className="flex justify-between">
                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWeI_rU7enS60mt1Z6swQ_G2pNW-S9ozXd4g&s"
                                                    alt="User avatar"
                                                    className="w-8 h-8 rounded-full border border-gray-300"
                                                />
                                                <p className="text-md font-medium text-gray-700">{item.userName} Fashions</p>
                                            </div>
                                            <div className="text-orange-600 btn btn-sm btn-outline">Follow</div>
                                        </div>

                                       

                                        

                                      

                                        <div className="card-actions mt-3 flex flex-row justify-around text-center">
                                            <Link to={`/equipment/${item._id}`} className="btn btn-sm bg-[#71e1fe] w-full text-sm font-bold">
                                               See details
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p className="text-center text-gray-500 col-span-full">No equipment found.</p>
            )}
        </div>
    );
};

export default AllEquipment;
