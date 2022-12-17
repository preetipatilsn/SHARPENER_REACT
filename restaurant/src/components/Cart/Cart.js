import React, { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `Rs ${cartContext.totalAmount.toFixed('2')}`;
  const hasItems = cartContext.items.length > 0;
  const decreaseItemCountHandler = (item) => {
    // if (item.quantity < 1) {
    //   return;
    // } else {

    // }
    cartContext.removeItem(item);
  };

  const increaseItemCountHandler = (item) => {
    cartContext.addItem(item);
  };
  const data = cartContext.items.map((item) => (
    <CartItem
      id={Math.random().toString()}
      key={Math.random()}
      name={item.name}
      amount={item.quantity}
      price={item.price}
      onRemove={decreaseItemCountHandler.bind(null, item)}
      onAdd={increaseItemCountHandler.bind(null, item)}
    ></CartItem>
  ));

    // const cartContext = useContext(CartContext);
    // const totalAmount = cartContext.totalAmount;
    // const data = cartContext.items.map(({ id, name, price, quantity }) => (
    //     <li key={id}>
    //         {name}:Rs{price * quantity}
    //     </li>
    // ));

    // console.log(totalAmount);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {data}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
              <span>Rs{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;