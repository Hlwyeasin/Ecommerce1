import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryName}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 capitalize">{categoryName.replace(/-/g, ' ')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border rounded p-4 shadow">
            <img src={product.thumbnail} alt={product.title} className="w-full h-[150px] object-cover" />
            <h3 className="font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
