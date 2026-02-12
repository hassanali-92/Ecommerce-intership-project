import React, { useState } from 'react';
import { 
  UserIcon, 
  ChatBubbleLeftRightIcon, 
  HeartIcon, 
  ShoppingCartIcon, 
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon 
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* --- 1. LOGO SECTION --- */}
          <div className="flex shrink-0 items-center gap-2">
            <div className="bg-blue-500 p-1.5 rounded-lg">
              <ShoppingCartIcon className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#4da1ff]">Brand</span>
          </div>

          {/* --- 2. SEARCH BAR SECTION (Hidden on mobile) --- */}
          <div className="hidden md:flex flex-1 max-w-2xl border-2 border-blue-500 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 outline-none text-gray-600 placeholder:text-gray-400"
            />
            {/* Category Dropdown */}
            <div className="flex items-center border-l border-gray-300 px-4 bg-white cursor-pointer hover:bg-gray-50">
              <span className="text-sm text-gray-700 whitespace-nowrap">All category</span>
              <ChevronDownIcon className="h-4 w-4 ml-2 text-gray-500" />
            </div>
            {/* Search Button */}
            <button className="bg-blue-500 text-white px-8 py-2 font-semibold hover:bg-blue-600 transition-all">
              Search
            </button>
          </div>

          {/* --- 3. ACTIONS SECTION (Icons) --- */}
          <div className="hidden lg:flex items-center gap-6">
            <NavItem icon={<UserIcon className="h-6 w-6" />} label="Profile" />
            <NavItem icon={<ChatBubbleLeftRightIcon className="h-6 w-6" />} label="Message" />
            <NavItem icon={<HeartIcon className="h-6 w-6" />} label="Orders" />
            <NavItem icon={<ShoppingCartIcon className="h-6 w-6" />} label="My cart" />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500">
              {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE SEARCH & MENU --- */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-4 space-y-4">
          <div className="flex border-2 border-blue-500 rounded-lg overflow-hidden">
            <input type="text" placeholder="Search" className="w-full px-3 py-2 outline-none" />
            <button className="bg-blue-500 text-white px-4">Go</button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <NavItem icon={<UserIcon className="h-6 w-6" />} label="Profile" />
            <NavItem icon={<ChatBubbleLeftRightIcon className="h-6 w-6" />} label="Message" />
            <NavItem icon={<HeartIcon className="h-6 w-6" />} label="Orders" />
            <NavItem icon={<ShoppingCartIcon className="h-6 w-6" />} label="Cart" />
          </div>
        </div>
      )}
    </nav>
  );
}

/**
 * Reusable Component for Icon + Label
 */
function NavItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
        {icon}
      </div>
      <span className="text-[12px] mt-1 text-gray-500 font-medium group-hover:text-blue-500 transition-colors">
        {label}
      </span>
    </div>
  );
}