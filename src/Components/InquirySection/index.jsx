import React from 'react';

export default function InquirySection() {
  return (
    <div className="mt-5 relative rounded-lg overflow-hidden min-h-[420px] flex items-center shadow-sm">
      
      {/* --- Background Image with Gradient Overlay --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
          alt="Inquiry Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-400/70"></div>
      </div>

      {/* --- Content Wrapper --- */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between px-10 gap-10">
        
        {/* Left Side: Text Content */}
        <div className="text-white max-w-md">
          <h2 className="text-[32px] font-bold leading-tight">
            An easy way to send requests to all suppliers
          </h2>
          <p className="mt-4 text-[16px] opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Right Side: Inquiry Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-[440px]">
          <h3 className="text-[20px] font-bold text-gray-900 mb-5">Send quote to suppliers</h3>
          
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="What item you need?" 
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            
            <textarea 
              placeholder="Type more details" 
              rows="3"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            
            <div className="flex gap-3">
              <input 
                type="number" 
                placeholder="Quantity" 
                className="w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <select className="w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Pcs</option>
                <option>Kg</option>
                <option>Litres</option>
              </select>
            </div>

            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition-all">
              Send inquiry
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}