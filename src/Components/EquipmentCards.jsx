import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Card from './Card';

const EquipmentCards = () => {
    const equipmentCards = useLoaderData();

    // Slice the first 7 items
    const firstSevenCards = equipmentCards.slice(0, 7);

    return (
        <div className='lg:px-5'>
            <div className='text-center my-6'>
                <h1 className='font-extrabold text-4xl'>Our New Products</h1>
                <p className='font-semibold text-lg'>Check & Get Your Desired Product!</p>
            </div>
            
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-1 lg:gap-4'>
                {firstSevenCards.map(equipment => (
                    <Card
                        key={equipment._id}
                        equipment={equipment}
                    />
                ))}
            </div>

            {/* "View All" Button */}
            <div className="flex justify-center mt-6">
                <Link to="/all-equipment" className="btn bg-[#71e1fe] text-white text-sm font-semibold w-full ">
                    View All
                </Link>
            </div>
        </div>
    );
};

export default EquipmentCards;
