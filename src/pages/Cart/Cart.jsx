import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal + deliveryFee;

  return (
    <div className='cart'>
      
      {/* Cart Items Section */}
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {/* Render each cart item */}
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            const quantity = cartItems[item._id];
            return (
              <React.Fragment key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <div className='cart-image-container'>
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                  </div>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{quantity}</p>
                  <p>${item.price * quantity}</p>
                  <p className="cross-btn" onClick={() => removeFromCart(item._id)}>X</p>
                </div>
                <hr />
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>

      {/* Cart Totals & Checkout Section */}
      <div className="cart-button">

        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <hr />

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${deliveryFee}</p>
          </div>
          <hr />

          <div className="cart-total-details">
            <p>Total</p>
            <p>${total}</p>
          </div>

          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        {/* Promo Code Section */}
        <div className="cart-promocode">
          <p>If you have a promo code, enter it here:</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Cart;
