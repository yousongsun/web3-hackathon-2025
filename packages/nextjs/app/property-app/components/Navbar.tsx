export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <div className="font-bold">Web3 Hackathon NZ</div>
      <div className="flex gap-4">
        <button className="hover:text-blue-500">Menu Item</button>
        <button className="hover:text-blue-500">Menu Item</button>
        <button className="hover:text-blue-500">Menu Item</button>
        <button className="hover:text-blue-500">Menu Item</button>
      </div>
    </nav>
  );
}
