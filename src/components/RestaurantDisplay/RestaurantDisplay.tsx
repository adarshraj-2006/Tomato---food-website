import React from 'react';
import './RestaurantDisplay.css';
import { restaurants } from '../data/data';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

const RestaurantDisplay = () => {
    return (
        <div className="restaurant-display" id="restaurant-display">
            <h2>Top Restaurants Near You</h2>
            <div className="restaurant-display-list">
                {restaurants.map((restaurant, index) => {
                    return <RestaurantCard
                        key={index}
                        id={restaurant.id}
                        name={restaurant.name}
                        cuisine={restaurant.cuisine}
                        image={restaurant.image}
                        rating={restaurant.rating}
                        ratingCount={restaurant.ratingCount}
                        deliveryTime={restaurant.deliveryTime}
                        priceRange={restaurant.priceRange}
                        distance={restaurant.distance}
                        hasOffer={restaurant.hasOffer}
                        offerText={restaurant.offerText}
                        isPromoted={restaurant.isPromoted || false}
                    />
                })}
            </div>
            <hr />
        </div>
    );
};

export default RestaurantDisplay;
