import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="z-30 bg-white bg-opacity-80 backdrop-blur-lg shadow-lg w-64 p-4 flex flex-col justify-between rounded-r-2xl">
      <div className="space-y-2">
        {[
          { label: "Exchange", icon: "📊", page: "/property-app" },
          { label: "Properties", icon: "🏠", page: "/property-app/properties" },
          { label: "Transactions", icon: "💰", page: "/property-app/transactions" },
          { label: "Settings", icon: "⚙️", page: "/property-app/settings" },
        ].map(({ label, icon, page }) => (
          <Link key={label} href={page} legacyBehavior={true}>
            <a>
              <button
                className="flex items-center space-x-3 w-full px-4 py-3 text-left font-medium
                          bg-gray-100 text-black
                          transition-all duration-100 rounded-lg shadow-md hover:scale-105 mb-2"
              >
                <span className="text-lg">{icon}</span>
                <span>{label}</span>
              </button>
            </a>
          </Link>
        ))}
      </div>
    </aside>
  );
}
