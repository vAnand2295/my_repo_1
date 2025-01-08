import React, { useContext, useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa'; 
import { CartContext } from '../context/Cartcontext';

const CartList = () => {
  const [cartItems, setCartItems] = useState([]);

const {setCart} = useContext(CartContext);

  console.log(cartItems,'ll');
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleDelete = (indexToRemove) => {
    const updatedCartItems = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    setCart(updatedCartItems);

  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const singleProductTotal = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.price * item.quantity : 0;
  };
  


  return (
    <div style={styles.container}>
      <h1>Cart List</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <ul style={styles.cartList}>
            {cartItems.map((item, index) => (
              <li key={index} style={styles.cartItem}>
                <img src={item.image} alt={item.title} style={styles.image} />
                <div style={styles.itemDetails}>
                  <p>{item.title}</p>
                  <p>${item.price.toFixed(2)}</p>
                  <p>{singleProductTotal(item.id)}</p>
                </div>
                <button onClick={() => handleDelete(index)} style={styles.deleteButton}>
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
          <div style={styles.totalContainer}>
            <h2>Total Price: ${calculateTotalPrice()}</h2>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  cartList: {
    listStyleType: 'none',
    padding: '0',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #ccc',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '20px',
  },
  itemDetails: {
    flex: '1',
    marginRight: '20px',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#d9534f',
    fontSize: '20px',
  },
  totalContainer: {
    textAlign: 'right',
    marginTop: '20px',
  },
};

export default CartList;
