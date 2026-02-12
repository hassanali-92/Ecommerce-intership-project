import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Newsletter() {
  return (
    <div className="bg-[#eff2f4] py-12 mt-10">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h3 className="text-[20px] font-bold text-gray-900 mb-2">
          Subscribe on our newsletter
        </h3>
        <p className="text-gray-600 text-[16px] mb-8">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>

        {/* Input & Button Group */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-md mx-auto">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <EnvelopeIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition-all shadow-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}