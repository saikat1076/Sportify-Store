import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaGripLines } from 'react-icons/fa';
import { MdEmail, MdPerson } from 'react-icons/md';
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { FaStar } from 'react-icons/fa';
import { MdDeliveryDining } from 'react-icons/md';

const UpdateEquipment = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [equipment, setEquipment] = useState({});

    useEffect(() => {
        const fetchEquipment = async () => {
            try {
                const { data } = await axios.get(`https://a-sports-equipment-store.vercel.app/equipment/${id}`);
                console.log("Fetched equipment data:", data);  // Log the fetched data
                setEquipment(data);
            } catch (error) {
                console.error("Error fetching equipment:", error);
                Swal.fire("Error", "Failed to fetch equipment. Please try again later.", "error");
            }
        };
        fetchEquipment();
    }, [id]);

    // Handle input changes to update the equipment state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEquipment((prevEquipment) => ({
            ...prevEquipment,
            [name]: value,
        }));
    };

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

        try {
            await axios.put(`https://a-sports-equipment-store.vercel.app/equipment/${id}`, updatedEquipment);
            Swal.fire("Success", "Equipment updated successfully!", "success");
        } catch (error) {
            console.error("Error updating equipment:", error);  // Log error for debugging
            Swal.fire("Error", "Failed to update equipment.", "error");
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
                            defaultValue={equipment.Image || ''}
                            onChange={handleChange}
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
                            defaultValue={equipment.itemName || ''}
                            onChange={handleChange}
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
                        defaultValue={equipment.description || ''}
                        onChange={handleChange}
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
                            defaultValue={equipment.categoryName || ''}
                            onChange={handleChange}
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
                            defaultValue={equipment.price || 0}
                            onChange={handleChange}
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
                                defaultValue={equipment.rating || 0}
                                onChange={handleChange}
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
                                defaultValue={equipment.customization || ''}
                                onChange={handleChange}
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
                                defaultValue={equipment.processingTime || ''}
                                onChange={handleChange}
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
                            defaultValue={equipment.stockStatus || 0}
                            onChange={handleChange}
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
                    <button type="submit" className="btn btn-primary w-full">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEquipment;
