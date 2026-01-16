import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus, Minus, Clock } from 'lucide-react';
import { useCart } from '@/components/context/CartContext/CartContext';

interface FoodItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  ratingCount?: number;
  isVeg?: boolean;
  restaurantId?: string;
  restaurantName?: string;
  prepTime?: string;
  isBestseller?: boolean;
}

const FoodItem: React.FC<FoodItemProps> = ({
  id,
  name,
  description,
  price,
  originalPrice,
  image,
  rating = 4.5,
  ratingCount = 100,
  isVeg = true,
  restaurantId = "1",
  restaurantName = "Kitchen",
  prepTime = '25-30 min',
  isBestseller = false,
}) => {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const quantity = getItemQuantity(id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(id);
  };

  const handleUpdateQuantity = (e: React.MouseEvent, newQuantity: number) => {
    e.preventDefault();
    e.stopPropagation();
    updateQuantity(id, newQuantity);
  };

  return (
    <Link
      to={`/food/${id}`}
      className="group block bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-neutral-800"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {isBestseller && (
          <span className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded-md bg-yellow-500 text-white">
            Bestseller
          </span>
        )}
        {originalPrice && originalPrice > price && (
          <span className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded-md bg-green-500 text-white">
            {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
          </span>
        )}

        {/* Add to Cart Button */}
        <div className="absolute bottom-3 right-3">
          {quantity === 0 ? (
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-white dark:bg-neutral-800 shadow-lg font-semibold text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-200"
            >
              ADD
              <Plus className="w-4 h-4" />
            </button>
          ) : (
            <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-red-500 shadow-lg">
              <button
                onClick={(e) => handleUpdateQuantity(e, quantity - 1)}
                className="w-7 h-7 rounded-md bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Minus className="w-4 h-4 text-white" />
              </button>
              <span className="w-6 text-center font-bold text-white">{quantity}</span>
              <button
                onClick={(e) => handleUpdateQuantity(e, quantity + 1)}
                className="w-7 h-7 rounded-md bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center ${isVeg ? 'border-green-600' : 'border-red-600'}`}>
              <div className={`w-2 h-2 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
            </div>
            <h3 className="font-semibold text-neutral-900 dark:text-white line-clamp-1 group-hover:text-red-500 transition-colors">
              {name}
            </h3>
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-green-600 text-white text-xs font-semibold flex-shrink-0">
            <Star className="w-3 h-3 fill-current" />
            {rating.toFixed(1)}
          </div>
        </div>

        <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-3">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-900 dark:text-white">₹{price}</span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-neutral-400 line-through">₹{originalPrice}</span>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-neutral-500">
            <Clock className="w-3.5 h-3.5" />
            {prepTime}
          </div>
        </div>

        <p className="mt-2 text-xs text-neutral-400">
          {restaurantName} • {ratingCount}+ ratings
        </p>
      </div>
    </Link>
  );
};

export default FoodItem;
