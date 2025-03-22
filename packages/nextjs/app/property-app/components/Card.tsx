// app/components/Card.tsx
import Image from "next/image";
import { Bath, Bed, User } from "lucide-react";

type CardProps = {
  title: string;
  price: number;
  share: number;
  beds: number;
  baths: number;
  owners: number;
  image: string;
  onClick: () => void;
  selected: boolean;
};

export default function Card({ title, price, share, beds, baths, owners, image, onClick, selected }: CardProps) {
  return (
    <div
      className={`bg-white shadow rounded-lg cursor-pointer p-4 max-h-[32dvh] hover:scale-105 transition-all select-none ${
        selected ? "border-2 border-purple-500" : ""
      }`}
      onClick={onClick}
    >
      <div className="bg-gray-400 h-40 rounded relative overflow-hidden">
        <Image src={image} alt="House" layout="fill" objectFit="cover" objectPosition={"0px -50px"} />
      </div>
      <div className="mt-2">
        <h2 className="text-md font-medium text-black wrap">{title}</h2>
        <p className="text-sm text-gray-600">
          ${price.toLocaleString()} | {share}%
        </p>
        <div className={`flex flex-row w-full opacity-50`}>
          <div className={`flex flex-row`}>
            <Bed />
            <p className="text-sm text-gray-600 w-1/2 m-0 ml-2">{beds}</p>
          </div>
          <div className={`flex flex-row`}>
            <Bath />
            <p className="text-sm text-gray-600 w-1/2 m-0 ml-2">{baths}</p>
          </div>
          <div className={`flex flex-row`}>
            <User />
            <p className="text-sm text-gray-600 w-1/2 m-0 ml-2">{owners}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
