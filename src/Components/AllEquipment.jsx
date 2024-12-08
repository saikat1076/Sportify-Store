import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const AllEquipment = () => {
    const products = useLoaderData();
    const { _id } = useParams();

    const equipment = Array.isArray(products)
        ? products.find(equipment => equipment._id === _id)
        : products;

    const [sortPrice, setSortPrice] = useState(products);


    const handleSortByPrice = () => {
        const sorted = [...sortPrice].sort((a, b) => {
            const priceA = parseInt(a.price);  
            const priceB = parseInt(b.price);

            return priceA - priceB;
        });
        setSortPrice(sorted);  
    };

    return (
        <div className="mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-6">All Equipment</h2>
            <div className='flex p-5 justify-end items-end'>
                <button onClick={handleSortByPrice} className='btn btn-accent btn-sm'>Sort By Price</button>
            </div>
            <table className="table w-full table-zebra">
                <thead>
                    <tr>
                        <th className="bg-gray-200 p-4 text-left text-xl italic">Image</th>
                        <th className="bg-gray-200 p-4 pl-8 text-left text-xl italic">Name</th>
                        <th className="bg-gray-200 p-4 text-left text-xl italic">Category</th>
                        <th className="bg-gray-200 p-4 text-left text-xl italic">Price</th>
                        <th className="bg-gray-200 p-4 text-left text-xl italic">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sortPrice.map((product, index) => (
                        <tr key={index}>
                            <td className="p-4 w-10 h-10">
                                <img src={product.Image} alt="User" />
                            </td>
                            <td className="p-4 text-xl font-bold">{product.itemName || 'N/A'}</td>
                            <td className="p-4 text-xl font-semibold">{product.categoryName || 'N/A'}</td>
                            <td className="p-4 text-xl font-semibold">{product.price || 'N/A'} /-</td>
                            <td className="p-4">
                                <div className="card-actions mt-3 text-center">
                                    <Link to={`/equipment/${product._id}`} className="btn btn-primary w-2/4 text-sm font-semibold">
                                        See Details
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllEquipment;
