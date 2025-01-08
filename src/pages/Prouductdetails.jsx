import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/Cartcontext';

const Prouductdetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const product = JSON.parse(localStorage.getItem('product')) || [];
    const foundProduct = product.find((item) => item.id === parseInt(id));
    setSingleProduct(foundProduct);
  }, [id]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => parseInt(prevQuantity) + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? parseInt(prevQuantity) - 1 : 1));
  };

  if (!singleProduct) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(singleProduct, quantity); 
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Details</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={singleProduct.image} alt={singleProduct.title} style={{ width: '300px', height: '300px' }} />
        <h2>{singleProduct.title}</h2>
        <p>Category: {singleProduct.category}</p>
        <p>Price: ${singleProduct.price}</p>
        <p>Description: {singleProduct.description}</p>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <button onClick={handleDecreaseQuantity} style={{ padding: '5px 10px', marginRight: '10px' }}>-</button>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            style={{ width: '50px', textAlign: 'center' }}
          />
          <button onClick={handleIncreaseQuantity} style={{ padding: '5px 10px', marginLeft: '10px' }}>+</button>
        </div>
        <button style={{ marginTop: '10px', backgroundColor: 'blue', borderRadius: '10px', color: 'white' }} onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Prouductdetails;