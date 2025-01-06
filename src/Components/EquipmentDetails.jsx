import { useLoaderData, useParams } from "react-router-dom";
import { Rotate } from 'react-awesome-reveal'; 

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
                            <h1 className="text-5xl pb-2 font-bold">{itemName}</h1>
                            

                            
                            <p className="text-xl font-semibold py-3">Description:
                                <span className="text-lg font-Italic"> {description}</span></p>
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
                                    <button className=" text-red-500 text-xl"> {rating}</button>
                                </div>
                            
                            </div>
                            <p className="text-xl font-bold text-gray-800">Price: <span className="text-[#0056D6]">MRP{price}/-</span></p>
                                <p
                            className={`badge ${stockStatus === "In Stock" ? "badge-success" : "badge-error"
                                } my-2 text-md font-medium`}
                        >
                            {stockStatus} stocks left
                        </p>
                        <h1 className="font-bold text-2xl">Seller</h1>
                        <div className="flex p-1 gap-4">

                                            <div className="flex items-center space-x-2">
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWeI_rU7enS60mt1Z6swQ_G2pNW-S9ozXd4g&s"
                                                    alt="User avatar"
                                                    className="w-8 h-8 rounded-full border border-gray-300"
                                                />
                                                <p className="text-md font-medium text-gray-700">{userName} Fashions</p>
                                            </div>
                                            <div className="text-orange-600 btn btn-sm btn-outline">Follow</div>
                                        </div>
                        
                                        <Rotate duration={1500} delay={300} triggerOnce>
                <p className="bg-blue-500 text-white text-lg font-semibold w-full text-center px-6 py-2 rounded-md duration-300">
                  Buy Now
                </p>
            </Rotate>
                        </div>
                                    
                    </div>



                </div>
        </div>
    );
};

export default EquipmentDetails;
