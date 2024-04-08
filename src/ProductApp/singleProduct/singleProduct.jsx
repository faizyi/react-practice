import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SingleProduct() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        console.log('Product details:', data);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="single-product-container">
      <div className="single-product">
        <h1>{product.title}</h1>
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.description}</p>
        {/* Display other product details as needed */}
      </div>
    </div>
  );
}

