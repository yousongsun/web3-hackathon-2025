// app/components/DetailPanel.tsx
type DetailProps = {
  title: string;
  price: number;
  description: string;
};

export default function DetailPanel({ title, price, description }: DetailProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="bg-gray-200 h-60 rounded"></div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-black">{title}</h2>
        <p className="text-lg text-gray-700">${price}</p>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
