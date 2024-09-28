// src/pages/ClientPage.jsx
import React from 'react';

const ClientPage = () => {
  
  const clientLinks = [
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305/client1',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305/client2',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305/client3',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305/client4',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305/client5',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305/client6',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305/client7',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305/client8',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305/client9',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305/client10',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305/client11',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305/client12'
  ];

  return (
    <div className="p-6 bg-gray-50">
    <div className="text-center p-6">
      {/* Top Image */}
      <img 
        src="https://i0.wp.com/blog.adnabu.com/wp-content/uploads/etsy-banner-size-1.png?w=900&ssl=1 " 
        alt="Top Image" 
        className="w-full h-auto max-h-96 object-cover mb-8"
      />

      {/* CLIENTS Section */}
      <h1 className="text-4xl font-bold uppercase mb-8">CLIENTS</h1>

      {/* Client Image Boxes */}
      <div className="grid grid-cols-3 gap-9 place-content-center {
    place-content: center;
}">
        {clientLinks.map((link, index) => (
          <a 
            key={index}  
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className=" w-32 h-32 flex items-center justify-center border border-gray-300 rounded-md overflow-hidden"
          >
            <img 
              src={`https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305/150x150?text=Client+${index + 1}`} 
              alt={`Client ${index + 1}`} 
              className="w-full h-full object-cover  "
            />
          </a>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ClientPage;



