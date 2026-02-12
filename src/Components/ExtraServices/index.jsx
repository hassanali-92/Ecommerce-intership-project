import React from 'react';
import { MagnifyingGlassIcon, CubeIcon, PaperAirplaneIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const services = [
  { id: 1, title: 'Source from Industry Hubs', icon: <MagnifyingGlassIcon className="h-6 w-6 text-white"/>, img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=300&q=80' },
  { id: 2, title: 'Customize Your Products', icon: <CubeIcon className="h-6 w-6 text-white"/>, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80' },
  { id: 3, title: 'Fast, Reliable Shipping', icon: <PaperAirplaneIcon className="h-6 w-6 text-white"/>, img: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&w=300&q=80' },
  { id: 4, title: 'Product Monitoring', icon: <ShieldCheckIcon className="h-6 w-6 text-white"/>, img: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=300&q=80' },
];

export default function ExtraServices() {
  return (
    <div className="mt-8">
      <h2 className="text-[24px] font-bold text-gray-900 mb-5">Our extra services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <div key={service.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden relative group shadow-sm">
            <div className="h-32 overflow-hidden">
              <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="p-4 relative">
              {/* Icon Circle */}
              <div className="absolute -top-6 right-4 h-12 w-12 bg-blue-100 border-4 border-white rounded-full flex items-center justify-center bg-blue-600">
                {service.icon}
              </div>
              <p className="font-medium text-gray-900 pr-10">{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}