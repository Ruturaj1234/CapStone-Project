// src/pages/ProductDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const productImages = {
  1: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/1200x600?text=Product+Detail+1',
  2: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/1200x600?text=Product+Detail+2',
  3: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/1200x600?text=Product+Detail+3',
  4: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/1200x600?text=Product+Detail+4',
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const imageUrl = productImages[id] || 'https://via.placeholder.com/1200x600?text=Product+Detail+Not+Found';

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-600">
        <h1 className="text-4xl font-bold mb-6 text-center">Product Detail {id}</h1>
        <img
          src={imageUrl}
          alt={`Product Detail ${id}`}
          className="w-full h-auto object-cover"
        />
        <p className="mt-8 text-lg text-gray-700">
          Details about Product {id} will be shown here. You can add more information about the product, such as descriptions, features, or pricing.
        </p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
