// app/components/Card.tsx
type CardProps = {
  title: string;
  price: number;
  onClick: () => void;
};

export default function Card({ title, price, onClick }: CardProps) {
  return (
    <div className="bg-white shadow rounded-lg cursor-pointer p-4 max-h-[32dvh] hover:bg-gray-200" onClick={onClick}>
      <div className="bg-gray-400 h-40 rounded"></div>
      <div className="mt-2">
        <h2 className="text-md font-medium text-black">{title}</h2>
        <p className="text-sm text-gray-600">${price}</p>
      </div>
    </div>
  );
}
