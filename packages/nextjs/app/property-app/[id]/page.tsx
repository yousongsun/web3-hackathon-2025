"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { AreaChart as AreaChartIcon, ChevronDown, ChevronUp, ShieldCheck, Users } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  defs,
  linearGradient,
  stop,
} from "recharts";
import Sidebar from "~~/app/property-app/components/Sidebar";


const items = [
  {
    id: 1,
    title: "2/3A Waverley St, Mt Wellington, Auckland",
    price: 92340,
    share: 10,
    beds: 3,
    baths: 2,
    owners: 10,
    description: "Currently co-owned by 10 people",
    image: "/house1.webp",
  },
  {
    id: 2,
    title: "12 Whaihirere Dr, Waiuku, Auckland",
    price: 162150,
    share: 20,
    beds: 4,
    baths: 3,
    owners: 5,
    description: "Currently co-owned by 5 people",
    image: "/house2.webp",
  },
  {
    id: 3,
    title: "64 Trafaar St, Onehunga, Auckland",
    price: 18426,
    share: 2,
    beds: 5,
    baths: 4,
    owners: 26,
    description: "Currently co-owned by 6 people",
    image: "/house3.jpg",
  },
  {
    id: 4,
    title: "421 Mt Eden Rd, Mt Eden, Auckland",
    price: 84260,
    share: 8,
    beds: 6,
    baths: 5,
    owners: 14,
    description: "Currently co-owned by 9 people",
    image: "/house4.jpg",
  },
];

export default function PropertyDetails() {
  const { id } = useParams();
  const [showTransactions, setShowTransactions] = useState(false);

  let propertyInfo = items.find((item) => item.id === Number(id));

    if (!propertyInfo) {
        return <div>Property not found</div>;
    }

  // Mock Property Data
  const property = {
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
    financials: {
      revenue: 7500,
      expenses: 2500,
      projectedReturns: "8-12%",
      history: [
        { month: "Jan", revenue: 7200, expenses: 2300 },
        { month: "Feb", revenue: 7300, expenses: 2400 },
        { month: "Mar", revenue: 7500, expenses: 2500 },
        { month: "Apr", revenue: 7700, expenses: 2600 },
        { month: "May", revenue: 7800, expenses: 2700 },
        { month: "Jun", revenue: 7900, expenses: 2750 },
      ],
    },
    transactions: [
      { date: "2024-03-15", type: "Dividend Payout", amount: 1500 },
      { date: "2024-02-10", type: "Property Maintenance", amount: -500 },
      { date: "2024-01-05", type: "Rental Income", amount: 7000 },
    ],
  };

  return (
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <div className="container mx-auto p-6 max-w-4xl">
        {/* Property Image */}
        <div className="relative h-64 w-full rounded-lg overflow-hidden">
          <Image src={propertyInfo.image} alt={propertyInfo.title} layout="fill" objectFit="cover" />
        </div>

        {/* Title & Price */}
        <h1 className="text-2xl font-bold text-gray-900 mt-4">{propertyInfo.title}</h1>
        <p className="text-lg text-purple-600 font-semibold">${propertyInfo.price.toLocaleString()}</p>

        {/* Description */}
        <p className="text-gray-700 mt-3">{propertyInfo.description}</p>

        <div className={`flex flex-row w-full`}>
          <div>
            {/* Ownership Details */}
            <div className="mt-6 mr-6 bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Users size={20} /> Ownership Information
              </h2>
              <p className="text-gray-600 mt-1">Total Shares: {property.ownership.totalShares}</p>
              <p className="text-gray-600">Your Shares: {property.ownership.ownedShares}</p>
              <p className="text-gray-600">
                Ownership Percentage: <span className="font-medium">{property.ownership.ownershipPercentage}%</span>
              </p>
              <p className="text-gray-600">Initial Buy-In Price: ${property.ownership.buyInPrice.toLocaleString()}</p>
            </div>

            {/* DAO Governance */}
            <div className="mt-6 mr-6 bg-white shadow-lg rounded-lg p-4">
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
          <div className={`w-full`}>
            {/* Financial Overview with Area Chart */}
            <div className="mt-6 bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <AreaChartIcon size={20} /> Financial Overview
              </h2>
              <p className="text-gray-600 mt-1">Monthly Revenue: ${property.financials.revenue.toLocaleString()}</p>
              <p className="text-gray-600">Monthly Expenses: ${property.financials.expenses.toLocaleString()}</p>
              <p className="text-gray-600">
                Projected Returns: <span className="font-medium">{property.financials.projectedReturns}</span>
              </p>

              {/* Revenue & Expenses Area Chart */}
              <div className="mt-4 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={property.financials.history}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E53E3E" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#E53E3E" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#4F46E5"
                      fill="url(#colorRevenue)"
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="expenses"
                      stroke="#E53E3E"
                      fill="url(#colorExpenses)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Transaction History Dropdown */}
            <div className="mt-6 bg-white shadow-lg rounded-lg p-4 relative">
              <button
                className="w-full flex items-center justify-between text-lg font-semibold text-gray-900"
                onClick={() => setShowTransactions(!showTransactions)}
              >
                Transaction History
                {showTransactions ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {showTransactions && (
                <div className="absolute left-0 top-full w-full bg-white shadow-lg border rounded-lg p-4 z-10">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 text-gray-600">Date</th>
                        <th className="py-2 text-gray-600">Type</th>
                        <th className="py-2 text-gray-600">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {property.transactions.map((txn, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2 text-gray-700">{txn.date}</td>
                          <td className="py-2 text-gray-700">{txn.type}</td>
                          <td className={`py-2 font-medium ${txn.amount < 0 ? "text-red-500" : "text-green-600"}`}>
                            ${txn.amount.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Ownership Details */}
        <div className="mt-6 mr-6 bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Users size={20} /> Lorem Ipsum
          </h2>
          <p className="text-gray-600 mt-1">Total Shares: {property.ownership.totalShares}</p>
          <p className="text-gray-600">Your Shares: {property.ownership.ownedShares}</p>
          <p className="text-gray-600">
            Ownership Percentage: <span className="font-medium">{property.ownership.ownershipPercentage}%</span>
          </p>
          <p className="text-gray-600">Initial Buy-In Price: ${property.ownership.buyInPrice.toLocaleString()}</p>
        </div>

        {/* Call to Action */}
        <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg text-center font-medium hover:bg-purple-700 transition">
          Join DAO & Invest
        </button>
      </div>
    </div>
  );
}
