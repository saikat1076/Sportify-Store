import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = ({ equipment }) => {
    const {_id, Image, itemName, userName, stockStatus, customization, rating, price, categoryName } = equipment;

    // Convert rating to a number, default to 0 if missing or invalid
    const parsedRating = rating ? parseFloat(rating) : 0;

    const fullStars = Math.floor(parsedRating); // Full stars (integer part)
    const hasHalfStar = parsedRating % 1 !== 0; // Check for half star
    const totalStars = Array(5).fill(0); // Total 5 stars (filled and empty)

    return (
        <div className='p-2'>
            <div className="card w-full bg-[#C0FFB3] shadow-lg shadow-gray-400 glass  rounded-lg mx-auto">
                <figure className="rounded-t-lg overflow-hidden">
                    <img
                        src={Image}
                        alt={itemName}
                        className="w-full h-72 object-fill transform hover:scale-105 transition-transform duration-300"
                    />
                </figure>
                <div className="card-body p-2">
                    <h2 className="text-2xl font-bold mx-auto text-gray-800">{itemName}</h2>
                    <p className="text-lg btn btn-sm font-bold w-1/3">{categoryName}</p>
                    <p className="text-lg italic">Customization: with {customization}</p>


                    <div className="flex items-center gap-1 text-yellow-500">
                        {totalStars.map((_, index) => {
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

                    <div className='flex justify-between'>
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWeI_rU7enS60mt1Z6swQ_G2pNW-S9ozXd4g&s"
                                alt="User avatar"
                                className="w-8 h-8 rounded-full border border-gray-300"
                            />
                            <p className="text-md font-medium text-gray-700">{userName} Fashions</p>
                        </div>
                        <div className='text-orange-600 btn btn-sm btn-outline'>Follow</div>
                    </div>
                    <div className="mt-1">
                        <p className="text-sm font-bold text-gray-800">Price: <span className="text-[#0056D6]">MRP{price}/-</span></p>
                        <p
                            className={`badge ${stockStatus === "In Stock" ? "badge-success" : "badge-error"
                                } mt-2 text-xs font-medium`}
                        >
                            {stockStatus} stocks left
                        </p>
                    </div>

                    <div className="card-actions mt-3 text-center">
                        <Link to={`/equipment/${_id}`} className="btn btn-primary w-full text-sm font-semibold">
                            See Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;