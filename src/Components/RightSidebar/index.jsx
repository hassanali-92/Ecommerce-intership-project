import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function RightSidebar() {
  return (
    // 'hidden lg:flex' ka matlab hai laptop size se ye dikhna shuru ho jayega
    <div className="hidden lg:flex flex-col w-64 gap-3">
      
      {/* User Login Box */}
      <div className="bg-[#E3F2FD] p-4 rounded-lg border border-blue-100 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-11 w-11 bg-blue-200 rounded-full flex items-center justify-center overflow-hidden">
            <UserCircleIcon className="h-12 w-12 text-blue-400" />
          </div>
          <p className="text-[14px] text-gray-800 font-medium leading-tight">
            Hi, user <br/> 
            <span className="text-gray-500 font-normal">let's get started</span>
          </p>
        </div>
        
        <div className="flex flex-col gap-2">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm">
            Join now
          </button>
          <button className="w-full bg-white text-blue-600 py-2 rounded-md text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-all">
            Log in
          </button>
        </div>
      </div>
      
      {/* Promo Card 1 (Orange) */}
      <div className="bg-[#F38332] p-4 rounded-lg text-white shadow-sm cursor-pointer hover:opacity-95">
        <p className="text-sm font-medium leading-snug">
          Get US $10 off with a new supplier
        </p>
      </div>

      {/* Promo Card 2 (Teal) */}
      <div className="bg-[#55BDB3] p-4 rounded-lg text-white shadow-sm cursor-pointer hover:opacity-95">
        <p className="text-sm font-medium leading-snug">
          Send quotes with supplier preferences
        </p>
      </div>

    </div>
  );
}