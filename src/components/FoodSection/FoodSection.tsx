import React from 'react';
import FoodItem from '../FoodItem/FoodItem';
import './FoodSection.css';

interface FoodItemType {
    _id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    category: string;
}

interface FoodSectionProps {
    title: string;
    items: FoodItemType[];
}

const FoodSection: React.FC<FoodSectionProps> = ({ title, items }) => {
    return (
        <div className="food-section">
            <h2 className="food-section-title">{title}</h2>
            <div className="food-section-list">
                {items.map((item, index) => (
                    <FoodItem
                        key={index}
                        id={item._id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        // Default props for visual consistency as these are missing in assets
                        rating={4 + Math.random()}
                        ratingCount={50 + Math.floor(Math.random() * 200)}
                        isVeg={!['Chicken', 'Non-Veg'].some(s => item.category.includes(s))}
                        prepTime={`${15 + Math.floor(Math.random() * 20)}-${35 + Math.floor(Math.random() * 10)} min`}
                        restaurantName="Tasty Bites"
                    />
                ))}
            </div>
            <hr />
        </div>
    );
};

export default FoodSection;
