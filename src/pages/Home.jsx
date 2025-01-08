import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/Productcard';

const Home = ({ searchTerm }) => {
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log(product,'dd');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProduct(res.data);
        setFilteredProducts(res.data); 
        localStorage.setItem('product', JSON.stringify(res.data));
      });
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(product);
    } else {
      const filtered = product.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, product]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around',gap:'10px',marginTop:'50px'}}>
      {filteredProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Home;