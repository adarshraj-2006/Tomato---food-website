import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem.jsx';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  

  // Filter items based on category
  const filteredList = category === 'A11'
    ? food_list
    : food_list.filter((item) => item.category === category);

    console.log(category)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>

      <div className='food-display-list'>
        {filteredList.length > 0 ? (
          filteredList.map((item) => (
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
          <p className='no-items'>No items found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
