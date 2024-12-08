import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaStar, FaGripLines } from 'react-icons/fa';
import { MdDeliveryDining, MdEmail, MdPerson } from 'react-icons/md';
import Swal from 'sweetalert2';

const UpdateEquipment = () => {
    const { id } = useParams();
    const equipment = useLoaderData();  // Make sure the data is passed from the loader
    const { user } = useContext(AuthContext);
    const [equipmentData, setEquipmentData] = useState(null);

    useEffect(() => {
        if (equipment) {
            setEquipmentData(equipment);
        }
    }, [equipment]);

    // If equipment data is not loaded, show loading message
    if (!equipmentData) {
        return <div>Loading...</div>;
    }

    const { _id, Image, itemName, processingTime, description, stockStatus, customization, rating, price, categoryName } = equipmentData;

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
    
        const updatedEquipment = {
            _id: id,  // Include the ID of the equipment
            Image: form.Image.value,
            itemName: form.itemName.value,
            categoryName: form.categoryName.value,
            description: form.description.value,
            price: parseFloat(form.price.value) || 0,
            rating: parseFloat(form.rating.value) || 0,
            customization: form.customization.value,
            processingTime: form.processingTime.value,
            stockStatus: parseInt(form.stockStatus.value) || 0,
            email: form.email.value,
            userName: form.userName.value,
        };
    
        // Validate rating
        if (updatedEquipment.rating < 0 || updatedEquipment.rating > 5) {
            return Swal.fire({
                title: 'Invalid Rating',
                text: 'Rating must be between 0 and 5.',
                icon: 'warning',
                confirmButtonText: 'Okay',
            });
        }
    
        try {
            const response = await fetch(`https://a-sports-equipment-store.vercel.app/equipment/${_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedEquipment),
            });
    
            const result = await response.json();
    
            if (result.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Equipment updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
            } else {
                Swal.fire({
                    title: 'No Changes Made',
                    text: 'No updates were applied to the equipment.',
                    icon: 'info',
                    confirmButtonText: 'Okay',
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'There was an error update the equipment',
                icon: 'error',
                confirmButtonText: 'Okay',
            });
        }
    };
    

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Update Equipment</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex justify-between gap-x-3">
                    {/* Image */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Product Image</label>
                        <input
                            type="text"
                            name="Image"
                            defaultValue={Image}
                            placeholder="Image URL"
                            className="input input-bordered w-full"
                        />
                    </div>
                    {/* Item Name */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Item Name</label>
                        <input
                            type="text"
                            name="itemName"
                            defaultValue={itemName}
                            placeholder="Enter item name"
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        defaultValue={description}
                        placeholder="Enter equipment description"
                        className="textarea textarea-bordered w-full"
                    />
                </div>

                <div className="flex justify-between gap-x-3">
                    {/* Category Name */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Category Name</label>
                        <input
                            type="text"
                            name="categoryName"
                            defaultValue={categoryName}
                            placeholder="Enter category"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Price */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            defaultValue={price}
                            placeholder="Enter price"
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                <div className="flex justify-between gap-x-3">
                    {/* Rating */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Rating</label>
                        <div className="flex items-center gap-2">
                            <FaStar className="text-yellow-500" />
                            <input
                                type="number"
                                name="rating"
                                defaultValue={rating}
                                placeholder="Rate out of 5"
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                    {/* Customization */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Customization</label>
                        <div className="flex items-center gap-2">
                            <FaGripLines className="text-gray-600" />
                            <input
                                type="text"
                                name="customization"
                                defaultValue={customization}
                                placeholder="e.g., bat with extra grip"
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between gap-x-3">
                    {/* Processing Time */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                        <div className="flex items-center gap-2">
                            <MdDeliveryDining className="text-green-500" />
                            <input
                                type="text"
                                name="processingTime"
                                defaultValue={processingTime}
                                placeholder="e.g., 3-5 days"
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                    {/* Stock Status */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">Stock Status</label>
                        <input
                            type="number"
                            name="stockStatus"
                            defaultValue={stockStatus}
                            placeholder="Available quantity"
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                <div className="flex justify-between gap-x-3">
                    {/* Read-only User Email */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">User Email</label>
                        <div className="flex items-center gap-2">
                            <MdEmail className="text-blue-500" />
                            <input
                                type="text"
                                name="email"
                                value={user?.email || "Name@gmail.com"}
                                readOnly
                                className="input input-disabled w-full"
                            />
                        </div>
                    </div>

                    {/* Read-only User Name */}
                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-700">User Name</label>
                        <div className="flex items-center gap-2">
                            <MdPerson className="text-purple-500" />
                            <input
                                type="text"
                                name="userName"
                                value={user?.displayName || "Name"}
                                readOnly
                                className="input input-disabled w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button className="btn btn-primary w-full">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEquipment;
