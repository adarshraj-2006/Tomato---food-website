import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal + deliveryFee;

  return (
    <form className="place-order">
      {/* ====== Left Side: Delivery Information ====== */}
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        {/* Name fields */}
        <div className="multifields">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>

        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Street Address" required />

        {/* City and State */}
        <div className="multifields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>

        {/* Zip and Country */}
        <div className="multifields">
          <input type="text" placeholder="Zip Code" required />
          <input type="text" placeholder="Country" required />
        </div>

        <input type="text" placeholder="Phone" required />
      </div>

      {/* ====== Right Side: Cart Totals ====== */}
      <div className="place-order-right">
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

          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
