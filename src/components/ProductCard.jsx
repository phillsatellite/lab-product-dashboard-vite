import React from 'react';
import styles from '../styles/ProductCard.module.css';


const ProductCard = ({ product, onRemove }) => {
  return (

    //Adds different class if product is out of stock
    <div className={product.inStock ? 'productCard' : 'productCard outOfStockClass'}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      {!product.inStock && <p style={{ fontWeight: 'bold' }}>Out of Stock</p>}
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;
