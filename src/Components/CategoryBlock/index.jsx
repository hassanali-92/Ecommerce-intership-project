import React from 'react';

const products = [
  { id: 1, name: 'Soft chairs', price: 'From USD 19', img: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Sofa & chair', price: 'From USD 19', img: 'https://via.placeholder.com/100' },
  { id: 3, name: 'Kitchen dishes', price: 'From USD 19', img: 'https://via.placeholder.com/100' },
  { id: 4, name: 'Smart watches', price: 'From USD 19', img: 'https://via.placeholder.com/100' },
  { id: 5, name: 'Kitchen mixer', price: 'From USD 19', img: 'https://via.placeholder.com/100' },
  { id: 6, name: 'Blenders', price: 'From USD 19', img: 'https://via.placeholder.com/100' },
  { id: 7, name: 'Home appliance', price: 'From USD 19', img: 'https://via.placeholder.com/100' },
  { id: 8, name: 'Coffee maker', price: 'From USD 19', img: 'https://via.placeholder.com/100' },
];

export default function CategoryBlock({ title, bannerImg }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg mt-5 flex flex-col lg:flex-row overflow-hidden shadow-sm">
      
      {/* --- Left Side: Category Banner --- */}
      <div className="relative w-full lg:w-[280px] shrink-0 min-h-[250px]">
        <img 
          src={bannerImg || "https://via.placeholder.com/280x300"} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 p-6">
          <h3 className="text-[20px] font-bold text-gray-900 mb-4 max-w-[150px]">
            {title}
          </h3>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-semibold hover:shadow-md transition-all">
            Source now
          </button>
        </div>
      </div>

      {/* --- Right Side: Product Grid (8 items) --- */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="p-4 border-l border-b border-gray-100 flex flex-col justify-between hover:bg-gray-50 transition-all cursor-pointer"
          >
            <div>
              <p className="text-[14px] text-gray-900 font-medium">{product.name}</p>
              <p className="text-[12px] text-gray-500 mt-1">{product.price}</p>
            </div>
            <div className="self-end mt-2">
              <img src={product.img} alt={product.name} className="h-20 w-20 object-contain" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}