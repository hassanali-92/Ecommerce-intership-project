import React from 'react';

const regions = [
  { id: 1, name: 'Arabic Emirates', site: 'shopname.ae', flag: '🇦🇪' },
  { id: 2, name: 'Australia', site: 'shopname.au', flag: '🇦🇺' },
  { id: 3, name: 'United States', site: 'shopname.us', flag: '🇺🇸' },
  { id: 4, name: 'Russia', site: 'shopname.ru', flag: '🇷🇺' },
  { id: 5, name: 'Italy', site: 'shopname.it', flag: '🇮🇹' },
  { id: 6, name: 'Denmark', site: 'shopname.dk', flag: '🇩🇰' },
  { id: 7, name: 'France', site: 'shopname.fr', flag: '🇫🇷' },
  { id: 8, name: 'China', site: 'shopname.cn', flag: '🇨🇳' },
  { id: 9, name: 'Great Britain', site: 'shopname.co.uk', flag: '🇬🇧' },
];

export default function RegionSection() {
  return (
    <div className="mt-8 mb-10">
      <h2 className="text-[24px] font-bold text-gray-900 mb-5">Suppliers by region</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-4">
        {regions.map((reg) => (
          <div key={reg.id} className="flex items-center gap-3 cursor-pointer hover:opacity-70 transition-opacity">
            <span className="text-2xl">{reg.flag}</span>
            <div>
              <p className="text-[14px] text-gray-800 leading-none">{reg.name}</p>
              <p className="text-[12px] text-gray-400 mt-1">{reg.site}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}