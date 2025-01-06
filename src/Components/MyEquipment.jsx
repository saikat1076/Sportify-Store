import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
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

    const handleDelete = (id) => {
        console.log('Deleting item with id:', id);  // Log the ID
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
                        console.log('Delete response:', data);  // Log the server response
                        if (data.deletedCount > 0) {
                            setEquipment(prevEquipment => prevEquipment.filter(item => item._id !== id));
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Equipment has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        console.error('Error deleting:', err);
                        Swal.fire({
                            title: "Error!",
                            text: "There was an issue deleting the item.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">My Equipment</h1>
            <div>
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
                        {equipment.map((product, index) => (
                            <tr key={index}>
                                <td className="p-4 w-20 h-20">
                                    <img src={product.Image} alt="Product" className="w-full h-full object-cover" />
                                </td>
                                <td className="p-4 text-xl font-bold">{product.itemName || 'N/A'}</td>
                                <td className="p-4 text-xl font-semibold">{product.categoryName || 'N/A'}</td>
                                <td className="p-4 text-xl font-semibold">{product.price || 'N/A'} /-</td>
                                <td className="p-4">
                                    <div className="card-actions mt-3 flex flex-row justify-around text-center">
                                        <Link to={`/update-equipment/${product._id}`} className="btn btn-primary w-[30%] text-sm font-semibold">
                                            Update
                                        </Link>
                                        <button onClick={() => handleDelete(product._id)} className="btn btn-primary w-[30%] text-sm font-semibold">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEquipment;
