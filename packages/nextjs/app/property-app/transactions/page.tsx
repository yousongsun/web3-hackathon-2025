import Sidebar from "~~/app/property-app/components/Sidebar";

export default function Transactions() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold text-center mb-6">Transactions</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Recipient Address</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter recipient's address, start with 0x"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Amount</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter amount"
              />
            </div>
            <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium
                     text-white bg-purple-600 hover:bg-purple-700 transition rounded-lg">
              Send Token
            </button>
            <div className="mt-4 p-2 text-center rounded">
              {/* Placeholder for status message */}
              Status: Pending
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
