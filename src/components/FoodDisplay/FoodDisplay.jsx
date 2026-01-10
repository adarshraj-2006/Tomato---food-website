// FoodDisplay.jsx
import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem.jsx';
import './FoodDisplay.css';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // If category is "all", show all items; else filter by category
  const filteredList =
    category === 'all'
      ? food_list
      : food_list.filter(item => item.category === category);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>

      <div className="food-display-list">
        {filteredList.length > 0 ? (
          filteredList.map(item => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))
        ) : (
          <p className="no-items">No items found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
