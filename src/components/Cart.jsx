import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="cart">Cart</h1>
      <div className="cart-btn">
        {" "}
        <button className="clearCart" onClick={clearCartItems}>
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && (
        <h1 className="emty-msg">Cart is empty! Add items to the cart</h1>
      )}
      <div className="cart-item">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
