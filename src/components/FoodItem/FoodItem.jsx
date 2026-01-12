import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">

      {/* IMAGE → FOOD DETAIL */}
      <Link to={`/food/${id}`} className="food-link">
        <div className="food-item-img-container">
          <img className="food-item-image" src={image} alt={name} />
        </div>
      </Link>

      {/* CART ACTIONS (NO LINK WRAP) */}
      <div className="food-item-cart">
        {!cartItems[id] ? (
          <img
            className="food-item-add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add more"
            />
          </div>
        )}
      </div>

      {/* INFO → FOOD DETAIL */}
      <Link to={`/food/${id}`} className="food-link">
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="Rating" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </Link>

    </div>
  );
};

export default FoodItem;
