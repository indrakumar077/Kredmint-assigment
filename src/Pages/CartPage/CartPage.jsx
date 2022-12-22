import React from "react";
import "./CartPage.css";
const CartPage = ({ cart, setCart }) => {
  function delCart(items) {
    const arr = cart.filter((item) => {
      return items !== item;
    });
    setCart(arr);
  }
  return (
    <div>
      <h5>All Added Items</h5>
      <div className="items">
        {cart &&
          cart.map((items) => {
            return (
              <div className="Itemcard">
                <img src={items.image} alt="" />
                <p>{items.price}</p>
                <p>{items.title}</p>
                <button onClick={() => delCart(items)}>delete Cart</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CartPage;
