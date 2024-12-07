import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const EquipmentCards = () => {
    const equipmentCards = useLoaderData();

    return (
        <div>
            <div className='grid lg:grid-cols-3 grid-cols-1'>
                {equipmentCards.map(equipment => (
                    <Card
                        key={equipment._id}
                        equipment={equipment} 
                    />
                ))}
            </div>
        </div>
    );
};

export default EquipmentCards;









