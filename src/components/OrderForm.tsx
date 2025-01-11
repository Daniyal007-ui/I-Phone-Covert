'use client';

import React, { useState } from 'react';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phoneModel, setPhoneModel] = useState('iphone15'); // Default phone model
  const [status, setStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission status

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('contact', contact);
    formData.append('city', city);
    formData.append('address', address);
    formData.append('phoneModel', phoneModel);

    try {
      // Send data to Formspree
      const response = await fetch('https://formspree.io/f/mqaawdgn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      // Handle success or failure
      if (response.ok) {
        setStatus('Your order has been sent!');
        setIsSubmitted(true); // Set to true to show the thank-you message
      } else {
        setStatus('Something went wrong. Please try again.');
        setIsSubmitted(false); // Set to false to show the error message
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Something went wrong. Please try again.');
      setIsSubmitted(false); // Set to false to show the error message
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-4">
      <h2 className="text-xl text-center underline font-bold mb-4">Order Form</h2>
      {isSubmitted && (
        <div className="text-green-700 mb-4">Thank you for placing your order!</div>
      )}
      {!isSubmitted && (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="contact" className="font-semibold">Contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="city" className="font-semibold">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="border p-2 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="font-semibold">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="border p-2 rounded"
            />
          </div>

          {/* Phone Model Select */}
          <div className="flex flex-col">
            <label htmlFor="phoneModel" className="font-semibold">Select Phone Model</label>
            <select
              id="phoneModel"
              name="phoneModel"
              value={phoneModel}
              onChange={(e) => setPhoneModel(e.target.value)}
              required
              className="border p-2 rounded"
            >
              <option value="iphone15">iPhone 15 Pro Max</option>
              <option value="iphone16">iPhone 16 Pro Max</option>
            </select>
          </div>

          <div>
            <button type="submit" className="w-full bg-gray-500 border border-black text-white p-2 rounded mt-4">Place Order</button>
          </div>
        </form>
      )}
      {status && <p>{status}</p>}
    </div>
  );
};

export default OrderForm;
