// src/pages/ProductPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/products/${id}`); // Navigate to the detail page
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-gray-600">
        <div className="mb-12 text-center">
          <img
            src="https://i0.wp.com/blog.adnabu.com/wp-content/uploads/etsy-banner-size-1.png?w=900&ssl=1"
            alt="Product Banner"
            className="w-full h-auto object-cover"
          />
        </div>
        <h2 className="text-4xl text-center font-bold mb-8 text-gray-900">PRODUCT</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(index + 1)}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={`https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/500x500?text=Product+${index + 1}`}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
