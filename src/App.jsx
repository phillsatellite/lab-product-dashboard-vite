import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const initialProducts = [
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Phone', price: 199, inStock: false },
    { id: 3, name: 'Keyboard', price: 49, inStock: true },
    { id: 4, name: 'Mouse', price: 29, inStock: false },
    { id: 5, name: 'Tablet', price: 499, inStock: true }, 
  ];

  //State to track products and filter
  const [products, setProducts] = useState(initialProducts);
  const [showInStock, setShowInStock] = useState(null);

  //Remove by id
  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  //Filter products based on if stocked
  const filteredProducts = products.filter((product) => {
    if (showInStock === null) return true;
    return product.inStock === showInStock;
  });

  return (
    <div>
      <h1>Product Dashboard</h1>

      <button onClick={() => setShowInStock(null)}>All Products</button>
      <button onClick={() => setShowInStock(true)}>In Stock</button>
      <button onClick={() => setShowInStock(false)}>Out of Stock</button>

      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;