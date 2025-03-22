"use client";

import { useState } from "react";
import Card from "./components/Card";
import DetailPanel from "./components/DetailPanel";
import Sidebar from "./components/Sidebar";
import {SwitchTheme} from "~~/components/SwitchTheme";

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

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<(typeof items)[0] | null>(null);

  return (
    <div className="flex flex-col h-[92dvh]">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className={`flex-1`}>
          <h2 className="text-4xl font-bold text-gray-300 m-8 mb-0 opacity-50 ml-[180px]">Exchange</h2>
          <main className="p-6 overflow-auto grid grid-cols-3 gap-2 h-[80dvh] w-3/4 justify-self-center">
            {items.map(item => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                share={item.share}
                beds={item.beds}
                baths={item.baths}
                owners={item.owners}
                image={item.image}
                onClick={() => setSelectedItem(item)}
                selected={selectedItem?.id === item.id}
              />
            ))}
          </main>
        </div>
        <aside className="w-96 bg-gray-50 p-6 overflow-auto">
          {selectedItem ? (
            <DetailPanel
              id={selectedItem.id}
              title={selectedItem.title}
              price={selectedItem.price}
              share={selectedItem.share}
                image={selectedItem.image}
              description={selectedItem.description}
            />
          ) : (
            <div className="text-gray-400 text-center mt-[50%]">Select a card to see details</div>
          )}
        </aside>
      </div>
    </div>
  );
}
