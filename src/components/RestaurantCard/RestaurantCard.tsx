import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import './RestaurantCard.css';

interface RestaurantCardProps {
    id: string;
    name: string;
    cuisine: string[];
    image: string;
    rating: number;
    ratingCount: number;
    deliveryTime: string;
    priceRange: string;
    distance: string;
    hasOffer?: boolean;
    offerText?: string;
    isPromoted?: boolean;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
    id,
    name,
    cuisine,
    image,
    rating,
    ratingCount,
    deliveryTime,
    priceRange,
    distance,
    hasOffer,
    offerText,
    isPromoted,
}) => {
    return (
        <div className="restaurant-card">
            <div className="restaurant-card-image-container">
                <img src={image} alt={name} className="restaurant-card-image" />
                {hasOffer && (
                    <div className="restaurant-offer-badge">
                        {offerText}
                    </div>
                )}
                {isPromoted && (
                    <div className="restaurant-promoted-badge">
                        Promoted
                    </div>
                )}
                <div className="restaurant-time-badge">
                    <Clock size={12} /> {deliveryTime}
                </div>
            </div>

            <div className="restaurant-card-content">
                <div className="restaurant-name-rating">
                    <h3 className="restaurant-name">{name}</h3>
                    <div className="restaurant-rating">
                        <span className="rating-value">{rating}</span>
                        <Star size={12} fill="white" strokeWidth={0} />
                    </div>
                </div>

                <div className="restaurant-cuisine">
                    <p>{cuisine.join(', ')}</p>
                    <p className="restaurant-price">{priceRange}</p>
                </div>

                <div className="restaurant-footer">
                    <div className="restaurant-distance">
                        <MapPin size={14} />
                        <span>{distance}</span>
                    </div>
                    <span className="rating-count">{ratingCount}+ ratings</span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
