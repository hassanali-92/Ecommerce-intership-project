import React from 'react';

// Dummy products data
const dealProducts = [
  { id: 1, name: 'Smart watches', discount: '-25%', img: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Laptops', discount: '-15%', img: 'https://via.placeholder.com/150' },
  { id: 3, name: 'GoPro cameras', discount: '-40%', img: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Headphones', discount: '-20%', img: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Canon camaras', discount: '-25%', img: 'https://via.placeholder.com/150' },
];

export default function DealsSection() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg mt-5 flex flex-col md:flex-row overflow-hidden shadow-sm">
      
      {/* --- Left Side: Timer Box --- */}
      <div className="p-5 border-r border-gray-100 w-full md:w-64 shrink-0 flex flex-col justify-center">
        <h4 className="text-[20px] font-bold text-gray-900 leading-tight">Deals and offers</h4>
        <p className="text-gray-400 text-sm mb-5">Hygiene equipments</p>
        
        {/* Timer UI */}
        <div className="flex gap-1.5">
          <TimerUnit value="04" label="Days" />
          <TimerUnit value="13" label="Hour" />
          <TimerUnit value="34" label="Min" />
          <TimerUnit value="56" label="Sec" />
        </div>
      </div>

      {/* --- Right Side: Products --- */}
      <div className="flex-1 flex overflow-x-auto no-scrollbar">
        {dealProducts.map((product) => (
          <div 
            key={product.id} 
            className="min-w-[170px] flex-1 p-5 border-r border-gray-50 last:border-0 flex flex-col items-center group cursor-pointer hover:bg-gray-50 transition-all"
          >
            <div className="h-32 w-32 mb-3 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform" 
                />
            </div>
            <p className="text-[14px] text-gray-800 mb-2 text-center">{product.name}</p>
            <span className="bg-[#FFE3E3] text-[#EB001B] px-3 py-1 rounded-full text-[12px] font-bold">
              {product.discount}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

// Timer sub-component taake code clean rahe
function TimerUnit({ value, label }) {
  return (
    <div className="bg-[#414141] text-white w-12 py-2 rounded-md flex flex-col items-center">
      <span className="text-[16px] font-bold leading-none">{value}</span>
      <span className="text-[10px] opacity-70 mt-1">{label}</span>
    </div>
  );
}