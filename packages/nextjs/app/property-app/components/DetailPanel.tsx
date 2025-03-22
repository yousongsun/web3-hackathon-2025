"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Copy } from "lucide-react";

type DetailProps = {
  id: number;
  title: string;
  hash: string;
  price: number;
  share: number;
  image: string;
  description: string;
};

export default function DetailPanel({ id, title, hash, price, share, image, description }: DetailProps) {
  const router = useRouter();

  return (
    <div className="mt-[35%] bg-white shadow-lg rounded-lg p-6 select-none relative overflow-hidden">
      {/* Image Section */}
      <div className="bg-gray-200 h-60 rounded-lg relative overflow-hidden">
        <Image src={image} alt="House" layout="fill" objectFit="cover" />
      </div>

      {/* Property Info */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-black">{title}</h2>
        <div className={`flex flex-row align-middle`}>
          <h3 className={`text-md text-gray-400`}>{hash}</h3>
          <Copy className={`w-4 ml-1 hover:cursor-pointer`} color={"#afafaf"} />
        </div>
        <p className="text-lg text-gray-700">
          ${price.toLocaleString()} | {share}%
        </p>
        <p className="text-sm mt-2 text-gray-400">{description}</p>

        {/* More Details Button */}
        <button
          onClick={() => router.push(`/property-app/${id}`)}
          className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium
                     text-white bg-purple-600 hover:bg-purple-700 transition rounded-lg"
        >
          More Details <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
