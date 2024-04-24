import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './ProjectRedux/cart/cartReducer';

const MenuSection = () => {
  const dispatch = useDispatch(); // Place the useDispatch hook directly inside the component body

  const items = [
    {
      id: 1,
      name: 'Grilled Chicken',
      description: 'Juicy grilled chicken served with your choice of sides.',
      price: 10.99,
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      name: 'Fried Chicken',
      description: 'Crispy fried chicken served with fries.',
      price: 9.99,
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      name: 'Fried Chicken',
      description: 'Crispy fried chicken served with fries.',
      price: 9.99,
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 4,
      name: 'Fried Chicken',
      description: 'Crispy fried chicken served with fries.',
      price: 9.99,
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 5,
      name: 'Grilled Chicken',
      description: 'Juicy grilled chicken served with your choice of sides.',
      price: 10.99,
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 6,
      name: 'Grilled Chicken',
      description: 'Juicy grilled chicken served with your choice of sides.',
      price: 10.99,
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 7,
      name: 'Grilled Chicken',
      description: 'Juicy grilled chicken served with your choice of sides.',
      price: 10.99,
      imageUrl: 'https://via.placeholder.com/200',
    },
    {
      id: 8,
      name: 'Grilled Chicken',
      description: 'Juicy grilled chicken served with your choice of sides.',
      price: 10.99,
      imageUrl: 'https://via.placeholder.com/200',
    },
  ];

  const handleAddToCart = (item) => { // Define the handler function inside the component body
    dispatch(addToCart(item)); // Dispatch addToCart action
    alert(`Added ${item.name} to the cart`);
  };

  return (
    <section>
      <div className="container mt-3">
        <h2 className="text-center mb-4">Menu</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {items.map((item) => (
            <div key={item.id} className="col">
              <div className="card h-100">
                <img src={item.imageUrl} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text mt-2"><strong>Price:</strong> ${item.price}</p>
                  <button className="btn btn-primary mt-1" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
