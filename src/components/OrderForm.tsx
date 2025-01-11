'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    city: '',
    address: '',
    item: 'iphone_15 pro Max',  // Default item selection
  });
  const [formSubmitted, setFormSubmitted] = useState(false);  // Track form submission status

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construct template parameters
    const templateParams = {
      name: formData.name,
      contact: formData.contact,
      city: formData.city,
      address: formData.address,
      item: formData.item,
    };

    // Send the email using EmailJS
    emailjs.send('service_ou6w3s6', 'template_tjowngl', templateParams, '18Og-v0vETJHiLyiI')
      .then(
        (response) => {
          console.log("Order submitted", response);
          alert('Order received! A confirmation email has been sent.');
          setFormSubmitted(true);  // Set form submission to true
          
          // Reset form after successful submission
          setFormData({
            name: '',
            contact: '',
            city: '',
            address: '',
            item: 'iphone_15 Pro Max',
          });
        },
        (error) => {
          console.log("Failed to submit", error);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl text-center underline font-bold mb-4">Order Form</h2>
      {formSubmitted && <div className="text-green-700 mb-4">Thank you for placing an order. Our team will contact you for order confirmation.</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            value={formData.contact}
            onChange={handleChange}
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
            value={formData.city}
            onChange={handleChange}
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
            value={formData.address}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="item" className="font-semibold">Item</label>
          <select
            id="item"
            name="item"
            value={formData.item}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          >
            <option value="iphone_15">iPhone 15 Pro Max</option>
            <option value="iphone_16">iPhone 16 pro Max</option>
          </select>
        </div>

        <div>
          <button type="submit" className="w-full bg-gray-500 border border-black text-white p-2 rounded mt-4">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
