import { useLoaderData, useParams } from "react-router-dom";

const EquipmentDetails = () => {
    const { _id } = useParams();
    const data = useLoaderData();
    console.log(data); // Debug to check what data contains

    // Adjust based on data structure
    const equipment = Array.isArray(data) 
        ? data.find(equipment => equipment._id == _id) 
        : data;

    

    const { Image, itemName, userName, stockStatus, customization, rating, price, categoryName, description } = equipment;

    return (
        <div>
            <div>
                <h2 className="text-6xl font-bold text-[#001f54] text-center py-7">See product Details</h2>
            </div>
                
                <div className="hero mx-auto bg-[#C0FFB3]">
                    <div className="hero-content p-2 flex-col lg:flex-row lg:gap-10">
                        <img
                            src={Image}
                            className="h-[400px] lg:w-2/4 sm: w-auto rounded-lg p-3 bg-gradient-to-r from-[#001F54] to-[#34C759]  shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{itemName}</h1>
                            <p className="btn btn-sm font-bold mt-3 bg-[#] w-1/3">{categoryName}</p>

                            
                            <p className="text-xl font-semibold py-3">Description:<span className="text-lg font-Italic">{description}</span></p>
                            <p className="font-bold text-xl text-blue-600 pb-2      ">Customize: with {customization}</p>

                            
                            <div className="rating items-center">
                            <h2 className="text-xl font-semibold">Rating:</h2>
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <div>
                                    <button className=" text-red-500 text-xl"> {rating}.0</button>
                                </div>
                            
                            </div>
                            <p className="text-xl font-bold text-gray-800">Price: <span className="text-[#0056D6]">MRP{price}/-</span></p>
                                <p
                            className={`badge ${stockStatus === "In Stock" ? "badge-success" : "badge-error"
                                } my-2 text-md font-medium`}
                        >
                            {stockStatus} stocks left
                        </p>
                        <button  className="btn btn-primary w-full text-sm font-semibold">Buy Now</button>
                        </div>
                                    
                    </div>



                </div>
        </div>
    );
};

export default EquipmentDetails;
