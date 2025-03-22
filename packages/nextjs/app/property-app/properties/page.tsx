"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Copy, ShieldCheck, Users } from "lucide-react";
import Sidebar from "~~/app/property-app/components/Sidebar";
import SortDropdown from "~~/app/property-app/components/Dropdown";

const mockProperties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    hash: "0xF36b...eE74",
    price: 950000,
    description: "A stunning villa with breathtaking ocean views and modern architecture.",
    image: "/house1.webp",
    ownership: {
      totalShares: 100,
      ownedShares: 10,
      ownershipPercentage: 10,
      buyInPrice: 95000,
    },
    daoTerms: [
      "Decentralized governance through token voting.",
      "Major renovations require 60% approval.",
      "Dividends paid quarterly to shareholders.",
    ],
  },
  {
    id: 2,
    title: "Downtown Penthouse Suite",
    hash: "0xF36b...eE74",
    price: 1250000,
    description: "A luxurious penthouse with stunning city skyline views and exclusive amenities.",
    image: "/house1.webp",
    ownership: {
      totalShares: 200,
      ownedShares: 30,
      ownershipPercentage: 15,
      buyInPrice: 37500,
    },
    daoTerms: [
      "Decentralized governance through token voting.",
      "Major renovations require 50% approval.",
      "Dividends paid annually to shareholders.",
    ],
  },
  {
    id: 3,
    title: "Countryside Estate",
    hash: "0xF36b...eE74",
    price: 800000,
    description: "A serene estate surrounded by nature, perfect for those seeking peace and tranquility.",
    image: "/house1.webp",
    ownership: {
      totalShares: 150,
      ownedShares: 20,
      ownershipPercentage: 13.33,
      buyInPrice: 53333,
    },
    daoTerms: [
      "Decentralized governance through token voting.",
      "Renovations require 70% approval.",
      "Quarterly dividend payouts.",
    ],
  },
];

export default function PropertiesList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % mockProperties.length); // Loop to the start
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + mockProperties.length) % mockProperties.length); // Loop to the end
  };

  const property = mockProperties[currentIndex];

  return (
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <div className="container mx-auto p-6 max-w-4xl relative">
        <h1 className="text-3xl font-bold text-gray-300 mb-6">My Properties</h1>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="z-10 absolute top-1/2 -left-24 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="z-10 absolute top-1/2 -right-24 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700"
        >
          <ChevronRight size={24} />
        </button>

        {/* Property Display */}
        <div className="relative">
          {/* Sliding Transition */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {mockProperties.map((property, index) => {
              const isCenter = index === currentIndex;
              return (
                <div
                  key={property.id}
                  className={`flex-none w-full m-1 px-4 py-6 bg-white shadow-lg rounded-lg transition-opacity duration-300 ${isCenter ? "" : `opacity-10`}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-32 w-32 rounded-lg overflow-hidden">
                      <Image src={property.image} alt={property.title} layout="fill" objectFit="cover" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{property.title}</h2>
                      <div className={`flex flex-row align-middle`}>
                        <h3 className={`text-md text-gray-400`}>{property.hash}</h3>
                        <Copy className={`w-4 ml-1 hover:cursor-pointer`} color={"#afafaf"} />
                      </div>
                      <p className="text-lg text-purple-600 font-semibold">${property.price.toLocaleString()}</p>
                      <p className="text-gray-700 mt-2">{property.description}</p>
                    </div>
                  </div>

                  {/* Ownership & DAO Details */}
                  <div className="mt-6 bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                      <Users size={20} /> Ownership Information
                    </h2>
                    <p className="text-gray-600 mt-1">Total Shares: {property.ownership.totalShares}</p>
                    <p className="text-gray-600">Your Shares: {property.ownership.ownedShares}</p>
                    <p className="text-gray-600">
                      Ownership Percentage:{" "}
                      <span className="font-medium">{property.ownership.ownershipPercentage}%</span>
                    </p>
                    <p className="text-gray-600">
                      Initial Buy-In Price: ${property.ownership.buyInPrice.toLocaleString()}
                    </p>
                  </div>

                  {/* DAO Governance Terms */}
                  <div className="mt-6 bg-white shadow-lg rounded-lg p-4">
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                      <ShieldCheck size={20} /> DAO Terms & Governance
                    </h2>
                    <ul className="list-disc pl-5 text-gray-600 mt-2">
                      {property.daoTerms.map((term, index) => (
                        <li key={index}>{term}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg text-center font-medium hover:bg-purple-700 transition">
          Go To Property DAO
        </button>
      </div>
    </div>
  );
}
