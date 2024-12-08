import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaStar, FaGripLines } from 'react-icons/fa';
import { MdDeliveryDining, MdEmail, MdPerson } from 'react-icons/md';
import Swal from 'sweetalert2'

const UpdateEquipment = () => {
    const equipment = useLoaderData();
    const { user } = useContext(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const Image = form.Image.value;
        const itemName = form.itemName.value;
        const categoryName = form.categoryName.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const email = form.email.value;
        const userName = form.userName.value;
    
        const updateEquipment = {
            Image,
            itemName,
            categoryName,
            description,
            price,
            rating,
            customization,
            processingTime,
            stockStatus,
            email,
            userName,
        };
    
        fetch(`http://localhost:5000/equipment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateEquipment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error updating the equipment',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                })
            });
    };
    
    const { _id, Image, itemName, processingTime, description, stockStatus, customization, rating, price, categoryName } = equipment;

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
                                name='email'
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
                                name='userName'
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