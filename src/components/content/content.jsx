import React from 'react';

function Content() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-12 lg:items-start">
          {/* Left-hand side with two stacked images */}
          <div className="md:w-6/12 lg:w-5/12 space-y-6">
            <img
              src="https://via.placeholder.com/400x500?text=Image+1"
              alt="Image 1"
              className="w-full h-auto rounded-lg shadow-lg transform transition hover:scale-105 duration-300 ease-in-out"
            />
          </div>
          {/* Right Side Text */}
          <div className="md:w-6/12 lg:w-7/12 space-y-6">
            <h2 className="text-4xl text-gray-900 italic font-bold md:text-5xl">
              Welcome
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Brite Proofings is a pioneer in Synthetic Flooring for the Pharma industry in India, known for setting industry benchmarks in quality and innovation. With state-of-the-art facilities and highly skilled manpower, we consistently deliver flooring solutions that meet the highest standards.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Our commitment to excellence ensures we provide flooring solutions that exceed client expectations, combining durability with aesthetic appeal for a wide range of industrial applications.
            </p>
            <a
              href="/About"
              className="inline-block mt-8 px-8 py-3 bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition ease-in-out duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div> {/* End of the first section */}

        {/* New section for products */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl italic font-semibold text-gray-900">Products</h2>
          <p className="mt-4 text-lg text-gray-600">Explore our high-quality product range designed for various industries.</p>

          {/* Product images and descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {/* Product 1 */}
            <div className="group">
              <img
                src="https://via.placeholder.com/300x300?text=Product+1"
                alt="Product 1"
                className="w-full h-auto rounded-lg shadow-lg transform transition hover:scale-105 duration-300 ease-in-out"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-orange-600 transition ease-in-out">
                Industrial Flooring Solution
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Durable and high-performance flooring solutions designed for tough industrial environments.
              </p>
              <a
                href="/ProductPage"
                className="inline-block mt-4 px-6 py-2 bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-300"
              >
                Read More
              </a>
            </div>

            {/* Product 2 */}
            <div className="group">
              <img
                src="https://via.placeholder.com/300x300?text=Product+2"
                alt="Product 2"
                className="w-full h-auto rounded-lg shadow-lg transform transition hover:scale-105 duration-300 ease-in-out"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-orange-600 transition ease-in-out">
                Pharma Flooring Solution
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Seamless, sterile, and easy-to-clean flooring ideal for pharmaceutical environments.
              </p>
              <a
                href="/ProductPage"
                className="inline-block mt-4 px-6 py-2 bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-300"
              >
                Read More
              </a>
            </div>

            {/* Product 3 */}
            <div className="group">
              <img
                src="https://via.placeholder.com/300x300?text=Product+3"
                alt="Product 3"
                className="w-full h-auto rounded-lg shadow-lg transform transition hover:scale-105 duration-300 ease-in-out"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-900 group-hover:text-orange-600 transition ease-in-out">
                Healthcare Flooring Solution
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Flooring solutions that combine safety, durability, and ease of maintenance for healthcare facilities.
              </p>
              <a
                href="/ProductPage"
                className="inline-block mt-4 px-6 py-2 bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Client Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl italic font-semibold text-gray-900">Our Clients</h2>
          <div className="mt-8 overflow-hidden relative">
            <div className="flex space-x-6 animate-scroll">
              {/* Client logos - continuously sliding */}
              {[...Array(10)].map((_, i) => (
                <img
                  key={i}
                  src={`https://via.placeholder.com/150x100?text=Client+${i + 1}`}
                  alt={`Client ${i + 1}`}
                  className="h-20 w-auto object-contain"
                />
              ))}
            </div>
          </div>
          <a
            href="/ClientPage"
            className="inline-block mt-8 px-8 py-3 bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition ease-in-out duration-300"
          >
            See All Clients
          </a>
        </div>

        {/* Gallery Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl italic font-semibold text-gray-900">Gallery</h2>
          <p className="mt-2 text-lg text-gray-600">Check out some of our recent projects!</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {/* Gallery Image 1 */}
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x200?text=Gallery+1"
                alt="Gallery 1"
                className="w-full h-auto transform transition hover:scale-105 duration-300 ease-in-out"
              />
            </div>
            {/* Gallery Image 2 */}
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x200?text=Gallery+2"
                alt="Gallery 2"
                className="w-full h-auto transform transition hover:scale-105 duration-300 ease-in-out"
              />
            </div>
            {/* Gallery Image 3 */}
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x200?text=Gallery+3"
                alt="Gallery 3"
                className="w-full h-auto transform transition hover:scale-105 duration-300 ease-in-out"
              />
            </div>
            {/* Gallery Image 4 */}
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300x200?text=Gallery+4"
                alt="Gallery 4"
                className="w-full h-auto transform transition hover:scale-105 duration-300 ease-in-out"
              />
            </div>
          </div>

          <a
            href="/ApplicationPage"
            className="inline-block mt-8 px-8 py-3 bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition ease-in-out duration-300"
          >
            View Full Gallery
          </a>
        </div>

      </div>
    </div>
  );
}

export default Content;
