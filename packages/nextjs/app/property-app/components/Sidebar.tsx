// app/components/Sidebar.tsx
export default function Sidebar() {
  return (
    <aside className="bg-white shadow w-64 p-4 flex flex-col justify-between">
      <div className="space-y-4">
        {["Dashboard", "Properties", "Investments", "Settings"].map(label => (
          <button
            key={label}
            className="text-black flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-4 w-full text-left"
          >
            <span>🏠</span> <span>{label}</span>
          </button>
        ))}
      </div>
      <div className="mt-auto flex items-center space-x-2">
        <img src="/logo.svg" alt="Profile" className="w-8 h-8 rounded-full" />
        <div>
          <p className="text-sm font-medium text-black">Title</p>
          <p className="text-xs text-gray-500">Description</p>
        </div>
      </div>
    </aside>
  );
}
