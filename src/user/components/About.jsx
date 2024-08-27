import React from 'react';

function About() {
  return (
    <div className="bg-gray-700 px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-white">About Us</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Manga Overview */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-semibold mb-6 text-gray-300">Our Mission</h2>
          <p className="text-gray-200 mb-4 leading-relaxed">
            We are dedicated to bringing the best manga translations to enthusiasts around the world. Our mission is to provide high-quality translations while preserving the essence and style of the original content.
          </p>
          <p className="text-gray-200 mb-4 leading-relaxed">
            Our team consists of passionate individuals who are skilled in translation, editing, and design. We work tirelessly to ensure that our translations are accurate and enjoyable to read.
          </p>
        </div>
        
        {/* Team Section */}
        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-300">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Sakura Tanaka</h3>
              <p className="text-gray-400 mb-4">Lead Translator</p>
              <p className="text-gray-200">
                <strong>Tanaka</strong> is an experienced translator with a deep love for manga. He leads our translation team and ensures that each manga is translated with the utmost care and accuracy.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Yumi Nakamura</h3>
              <p className="text-gray-400 mb-4">Editor</p>
              <p className="text-gray-200">
                <strong>Nakamura</strong> is a meticulous editor who ensures that our translations are clear, consistent, and free of errors. She has a keen eye for detail and a passion for storytelling.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Mio Suzuki</h3>
              <p className="text-gray-400 mb-4">Graphic Designer</p>
              <p className="text-gray-200">
                <strong>Suzuki</strong> is our talented graphic designer who creates eye-catching layouts and artwork for our manga. Her creativity helps bring our translations to life.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Hiroshi Yamamoto</h3>
              <p className="text-gray-400 mb-4">Web Developer</p>
              <p className="text-gray-200">
                <strong>Yamamoto</strong> is responsible for maintaining and improving our website. He ensures that our platform is user-friendly and up-to-date with the latest features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
