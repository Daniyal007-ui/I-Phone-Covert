'use client';

import Image from 'next/image';
import { useState } from 'react';
import OrderForm from './OrderForm';

export default function Hero() {
  const [mainImage, setMainImage] = useState('/1.jpg');
  const [quantity] = useState(1); // Fixed quantity to 1

  // Price mapping based on quantity
  const priceMapping: { [key: number]: number } = {
    1: 220,
    2: 300,
    3: 400,
  };

  // Function to change the main image when a thumbnail is clicked
  const handleThumbnailClick = (src: string) => {
    setMainImage(src);
  };

  return (
    <div className="h-auto w-full bg-gradient-to-r from-slate-300 to-gray-300 flex flex-col sm:flex-row justify-around items-center py-10 px-4 sm:px-6 md:px-12">
      {/* Image Section */}
      <div className="flex flex-col items-center sm:items-start w-full sm:w-1/3 mb-6 sm:mb-0">
        <div className="md:w-full sm:w-1/2 mb-4">
          <Image src={mainImage} alt="saam cream" width={400} height={300} className="h-auto w-full object-cover" />
        </div>
        <div className="flex space-x-3 mb-2 md:ml-5 sm:mb-0 sm:ml-0">
          <div onClick={() => handleThumbnailClick('/2.jpg')} className="cursor-pointer">
            <Image src={'/2.jpg'} alt="pic1" height={200} width={200} className="rounded-md" />
          </div>
          <div onClick={() => handleThumbnailClick('/3.jpg')} className="cursor-pointer">
            <Image src={'/3.jpg'} alt="pic2" height={200} width={200} className="rounded-md" />
          </div>
          <div onClick={() => handleThumbnailClick('/4.jpg')} className="cursor-pointer">
            <Image src={'/4.jpg'} alt="pic3" height={200} width={200} className="rounded-md" />
          </div>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="w-full sm:w-1/3 text-center sm:text-left sm:ml-6 mb-6 sm:mb-0">
        <h1 className="font-bold text-2xl sm:text-3xl text-black">iPhone NFC Cover</h1>
        <p className="text-xl text-gray-500 mt-2">
          Ink Screen Protective Smart Phone Case Compatible with all IPhone&apos;s , NFC Transmission, Long-Lasting Imaging Display, Black
        </p>
        <h2 className="text-black font-bold text-xl sm:text-2xl mt-4">PRICE:</h2>

        <div className="mt-4">
          {/* Display price dynamically based on quantity */}
          <p className="font-bold text-lg animate-flash text-gray-800">
            Price: {priceMapping[quantity]} SAR
          </p>
        </div>

        {/* Quantity Information */}
        <div className="mt-4">
          <p className="text-xl font-semibold">Quantity: 1 piece</p>
        </div>

        <h2 className="text-black font-bold mt-4 text-xl">DESCRIPTION:</h2>
        <p className="text-gray-500 mt-2">
          NFC technology is used to transmit display content to the ink screen of the mobile phone case with low power consumption. After the transmission is completed, no energy is consumed. Even if the mobile phone is turned off or the mobile phone case is removed, the image can be displayed permanently.
        </p>
      </div>

      {/* Order Form */}
      <OrderForm />
    </div>
  );
}
