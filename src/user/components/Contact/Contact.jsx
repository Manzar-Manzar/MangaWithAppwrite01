import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you for your message!');
  
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="bg-gray-700 px-4 py-8">
      <h1 className="text-white text-3xl font-bold mb-6">Contact Us</h1>
      <div className="flex flex-col lg:flex-row">
        {/* Contact Form */}
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-white text-xl font-semibold mb-4">Send Us a Message</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
            {formStatus && (
              <div className="mt-4 text-green-400">{formStatus}</div>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
          <h2 className="text-white text-xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-300 mb-4">
            <strong>Email:</strong> ms@example.com
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Address:</strong> 123 Tulsipur, Dang, Nepal
          </p>
          {/* Optional: Embed a map */}
          <div className="mt-4">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327580.2299691668!2d81.50726902829378!3d28.13091574456468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39b82539f0d5f9ef%3A0x9e89fbe7c4a38c9b!2sDang!5e0!3m2!1sen!2snp!4v1634697576417!5m2!1sen!2snp"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
