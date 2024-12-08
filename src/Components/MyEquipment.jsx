import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaStar, FaRegStar } from 'react-icons/fa'; // Importing the star icons
import { Link } from 'react-router-dom'; // Ensure you import Link if it's not already imported
import Swal from "sweetalert2";

const MyEquipment = () => {
    const { user } = useContext(AuthContext);
    const [equipment, setEquipment] = useState([]);

    useEffect(() => {
        if (user && user.email) {
            fetch(`https://a-sports-equipment-store.vercel.app/equipment/email/${user.email}`)
                .then(res => res.json())
                .then(data => setEquipment(data))
                .catch(err => console.error(err));
        }
    }, [user]);

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://a-sports-equipment-store.vercel.app/equipment/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            // Remove the deleted item from the state immediately
                            setEquipment(prevEquipment => prevEquipment.filter(item => item._id !== id));

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Equipment has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => console.error(err));
            }
        });
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">My Equipment</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
                {equipment.length > 0 ? (
                    equipment.map(item => {
                        // Convert rating to a number, default to 0 if missing or invalid
                        const parsedRating = item.rating ? parseFloat(item.rating) : 0;
                        const fullStars = Math.floor(parsedRating); // Full stars (integer part)
                        const hasHalfStar = parsedRating % 1 !== 0; // Check for half star

                        return (
                            <div key={item._id} className='p-2'>
                                <div className="card w-full bg-[#C0FFB3] shadow-lg shadow-gray-400 glass rounded-lg mx-auto">
                                    <figure className="rounded-t-lg overflow-hidden">
                                        <img
                                            src={item.Image}
                                            alt={item.itemName}
                                            className="w-full h-72 object-fill transform hover:scale-105 transition-transform duration-300"
                                        />
                                    </figure>
                                    <div className="card-body p-2">
                                        <h2 className="text-2xl font-bold mx-auto text-gray-800">{item.itemName}</h2>
                                        <p className="text-lg btn btn-sm font-bold w-1/3">{item.categoryName}</p>
                                        <p className="text-lg italic">Customization: with {item.customization}</p>

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
                                            <p className="ml-1 text-xs font-bold text-gray-600">{parsedRating.toFixed(1)}</p>
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
                                            <div className='text-orange-600 btn btn-sm btn-outline'>Follow</div>
                                        </div>
                                        <div className="mt-1">
                                            <p className="text-sm font-bold text-gray-800">Price: <span className="text-[#0056D6]">MRP{item.price}/-</span></p>
                                            <p className={`badge ${item.stockStatus === "In Stock" ? "badge-success" : "badge-error"} mt-2 text-xs font-medium`}>
                                                {item.stockStatus} stocks left
                                            </p>
                                        </div>

                                        <div className="card-actions mt-3 flex flex-row justify-around text-center">
                                            <Link to={'/update-equipment/${item._id}'} className="btn btn-primary w-[30%] text-sm font-semibold">
                                                Update
                                            </Link>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-primary w-[30%] text-sm font-semibold">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-gray-500 col-span-full">No equipment found.</p>
                )}
            </div>
        </div>
    );
};

export default MyEquipment;
