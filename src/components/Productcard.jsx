import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card style={{ width: '20rem' }} key={product.id}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <Link to={`/productdetails/${product.id}`} style={{ textDecoration: 'none' }}>
            <Button variant="primary">
              View Full Product Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;