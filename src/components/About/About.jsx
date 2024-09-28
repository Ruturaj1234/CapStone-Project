import React from 'react'

export default function About() {
  return (
    <div className="p-6 bg-gray-50">
      {/* Top Image */}
      <img 
        src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/1200x400" 
        alt="About Us" 
        className="w-full h-auto max-h-96 object-cover mb-8 rounded-lg shadow-lg"
      />

      {/* About Us Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 text-orange-700">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are a company dedicated to providing exceptional service and innovative solutions. Our team of experts works tirelessly to ensure that our clients receive the highest level of support and expertise.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-12 px-4 py-6 bg-white shadow-md rounded-lg">
        <h2 className="text-4xl font-bold mb-6 text-orange-700">Our Vision</h2>
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
          <li>To be a global leader in our industry, known for our innovation and excellence.</li>
          <li>To create sustainable solutions that positively impact communities and environments.</li>
          <li>To foster a culture of continuous improvement and learning among our team members.</li>
          <li>To build lasting partnerships with our clients based on trust and mutual respect.</li>
        </ul>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-6 bg-white shadow-md rounded-lg">
        <h2 className="text-4xl font-bold mb-6 text-orange-700">Our Mission</h2>
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
          <li>To deliver high-quality products and services that exceed customer expectations.</li>
          <li>To drive innovation through research and development, adapting to market needs.</li>
          <li>To maintain integrity and transparency in all our business practices.</li>
          <li>To contribute to the well-being of our employees and the communities we serve.</li>
        </ul>
      </section>
    </div>
  );
}

