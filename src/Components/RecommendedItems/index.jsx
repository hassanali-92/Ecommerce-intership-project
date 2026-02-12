import React from 'react';

const recommendedData = [
  { id: 1, price: '$10.30', desc: 'T-shirts with multiple colors for men', img: 'https://via.placeholder.com/150' },
  { id: 2, price: '$12.50', desc: 'Jeans shorts for men blue color', img: 'https://via.placeholder.com/150' },
  { id: 3, price: '$15.00', desc: 'Leather wallet for men brown', img: 'https://via.placeholder.com/150' },
  { id: 4, price: '$8.99', desc: 'Cotton socks pack of 5 pairs', img: 'https://via.placeholder.com/150' },
  { id: 5, price: '$19.99', desc: 'Professional camera tripod stand', img: 'https://via.placeholder.com/150' },
  { id: 6, price: '$22.00', desc: 'Wireless headphones with bass', img: 'https://via.placeholder.com/150' },
  { id: 7, price: '$35.00', desc: 'Smart watch with OLED display', img: 'https://via.placeholder.com/150' },
  { id: 8, price: '$10.00', desc: 'Water bottle 1 liter for gym', img: 'https://via.placeholder.com/150' },
  { id: 9, price: '$50.00', desc: 'Gaming mouse with RGB lights', img: 'https://via.placeholder.com/150' },
  { id: 10, price: '$120.00', desc: 'Mechanical keyboard for office', img: 'https://via.placeholder.com/150' },
];

export default function RecommendedItems() {
  return (
    <div className="mt-8">
      <h2 className="text-[24px] font-bold text-gray-900 mb-5">Recommended items</h2>
      
      {/* Grid: Mobile par 2 columns, Desktop par 5 columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {recommendedData.map((item) => (
          <div 
            key={item.id} 
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="h-40 w-full flex items-center justify-center mb-4">
              <img 
                src={item.img} 
                alt={item.desc} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="mt-2">
              <p className="text-[16px] font-bold text-gray-900">{item.price}</p>
              <p className="text-[14px] text-gray-500 mt-1 leading-tight line-clamp-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}