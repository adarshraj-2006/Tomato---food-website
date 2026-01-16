import React from 'react';
import { foodItems } from '../data/data';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';

interface FoodDisplayProps {
  category: string;
}

const FoodDisplay: React.FC<FoodDisplayProps> = ({ category }) => {

  const filteredList =
    category === 'all'
      ? foodItems
      : foodItems.filter(item => item.category === category);

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-header">
        <h2>Top Dishes Near You</h2>
      </div>

      <div className="food-display-list">
        {filteredList.map((item) => (
          <FoodItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            originalPrice={item.originalPrice}
            image={item.image}
            rating={item.rating}
            ratingCount={item.ratingCount}
            isVeg={item.isVeg}
            restaurantId={item.restaurantId}
            restaurantName={item.restaurantName}
            prepTime={item.prepTime}
            isBestseller={item.isBestseller}
          />
        ))}
      </div>

      {filteredList.length === 0 && (
        <div className="no-food-items">
          <h3>No dishes found for this category</h3>
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
