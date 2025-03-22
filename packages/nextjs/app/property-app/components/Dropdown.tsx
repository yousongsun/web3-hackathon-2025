import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Popularity");

  const options = ["Name Ascending", "Name Descending", "Date Created", "Popularity"];

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="mr-8 mt-4 text-sm inline-flex justify-between items-center px-4 py-1 bg-gray-100 border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
        <ChevronDown className="ml-2 h-5 w-5 text-gray-400" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {options.map(option => (
              <button
                key={option}
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                  option === selectedOption ? "font-semibold" : "text-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
