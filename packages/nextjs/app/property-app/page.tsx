"use client";

import { useState } from "react";
import Card from "./components/Card";
import DetailPanel from "./components/DetailPanel";
import Sidebar from "./components/Sidebar";

const items = [
  { id: 1, title: "Property 1", price: 250, description: "Description for property 1." },
  { id: 2, title: "Property 2", price: 500, description: "Description for property 2." },
  { id: 3, title: "Property 3", price: 500, description: "Description for property 2." },
  { id: 4, title: "Property 4", price: 500, description: "Description for property 2." },
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<(typeof items)[0] | null>(null);

  return (
    <div className="flex flex-col h-[92dvh]">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto grid grid-cols-3 gap-2">
          {items.map(item => (
            <Card key={item.id} title={item.title} price={item.price} onClick={() => setSelectedItem(item)} />
          ))}
        </main>
        <aside className="w-96 bg-gray-50 p-6 overflow-auto">
          {selectedItem ? (
            <DetailPanel title={selectedItem.title} price={selectedItem.price} description={selectedItem.description} />
          ) : (
            <div className="text-gray-400">Select a card to see details</div>
          )}
        </aside>
      </div>
    </div>
  );
}
