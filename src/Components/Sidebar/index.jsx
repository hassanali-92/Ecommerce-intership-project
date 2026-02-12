import React from 'react';

const categories = [
  "Automobiles",
  "Clothes and wear",
  "Home interiors",
  "Computer and tech",
  "Tools, equipments",
  "Sports and outdoor",
  "Animal and pets",
  "Machinery tools",
  "More category"
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <ul className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white">
        {categories.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className={`block px-4 py-2.5 text-[15px] transition-colors
                ${item === 'Automobiles' 
                  ? 'bg-[#E5F1FF] text-blue-600 font-semibold' // Active state jaisa image mein hai
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}