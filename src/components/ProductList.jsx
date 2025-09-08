import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  //If no product display message 
  if (products.length === 0) {
    return <p>No products are currently in stock.</p>;
  }

  //Loop through products and render a ProductCard for each
  return (
    <>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onRemove={onRemove}
        />
      ))}
    </>
  );
};

export default ProductList;
