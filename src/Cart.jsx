import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from './ProjectRedux/cart/cartReducer';

const Cart = () => {
  const cartItems = useSelector(state => state.items); 
  const dispatch = useDispatch();

 
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  
  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <>
      <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Chicken Forever</Link>
        </div>
      </header>
      <div className="container mt-5 pt-4">
        <h2 className="mb-4">Cart</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td className="text-end">
                  <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" className="text-start">Total:</td>
              <td className="text-end">${totalPrice.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="3" className="text-end">
                <button className="btn btn-primary">Order Now</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Cart;
