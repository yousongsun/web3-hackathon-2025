"use client";

import { useState } from "react";
import Card from "./components/Card";
import DetailPanel from "./components/DetailPanel";
import Sidebar from "./components/Sidebar";
import {SwitchTheme} from "~~/components/SwitchTheme";
import SortDropdown from "~~/app/property-app/components/Dropdown";

const items = [
  {
    id: 1,
    title: "2/3A Waverley St, Mt Wellington, Auckland",
    hash: "0xF36b...eE74",
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
    hash: "0xF36b...eE74",
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
    hash: "0xF36b...eE74",
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
    hash: "0xF36b...eE74",
    price: 84260,
    share: 8,
    beds: 6,
    baths: 5,
    owners: 14,
    description: "Currently co-owned by 9 people",
    image: "/house4.jpg",
  },
  {
    id: 5,
    title: "Searching",
    price: 0,
    share: 0,
    beds: 0,
    baths: 0,
    owners: 0,
    description: "",
    image: "load",
  },
  {
    id: 6,
    title: "Searching",
    price: 0,
    share: 0,
    beds: 0,
    baths: 0,
    owners: 0,
    description: "",
    image: "load",
  },
  {
    id: 7,
    title: "Searching",
    price: 0,
    share: 0,
    beds: 0,
    baths: 0,
    owners: 0,
    description: "",
    image: "load",
  },
  {
    id: 8,
    title: "Searching",
    price: 0,
    share: 0,
    beds: 0,
    baths: 0,
    owners: 0,
    description: "",
    image: "load",
  },
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<(typeof items)[0] | null>(null);

  return (
    <div className="flex flex-col h-[92dvh]">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className={`flex-1`}>
          <div className={`flex flex-row justify-between align-middle w-full m-8 mb-0 `}>
            <h2 className="text-4xl font-bold text-gray-300 opacity-50 ml-[30px]">Exchange</h2>
            <SortDropdown />
          </div>
          <main className="p-6 overflow-auto grid grid-cols-3 gap-2 h-[80dvh] w-full justify-self-center">
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
                onClick={
                  item.title !== "Searching"
                    ? () => setSelectedItem(item)
                    : () => {
                        return;
                      }
                }
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
              hash={selectedItem.hash}
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
