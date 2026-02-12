import React from 'react';
import { 
  UserIcon, 
  ChatBubbleLeftRightIcon, 
  ChevronDownIcon 
} from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-5 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
          
          {/* Brand & Description */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-blue-600 p-2 rounded-md">
                 <span className="text-white font-bold text-xl text-center block w-6">B</span>
               </div>
               <span className="text-2xl font-bold text-blue-600">Brand</span>
            </div>
            <p className="text-gray-500 text-[16px] leading-relaxed">
              Best information about the company goes here but now lorem ipsum is dummy text.
            </p>
            
            {/* Social Placeholder Icons using your Heroicons */}
            <div className="flex gap-3 mt-6">
              <div className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white cursor-pointer text-gray-600 transition-colors">
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
              </div>
              <div className="p-2 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white cursor-pointer text-gray-600 transition-colors">
                <UserIcon className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterCol title="About" links={['About Us', 'Find store', 'Categories', 'Blogs']} />
            <FooterCol title="Partnership" links={['About Us', 'Find store', 'Categories', 'Blogs']} />
            <FooterCol title="Information" links={['Help Center', 'Money Refund', 'Shipping', 'Contact us']} />
            <FooterCol title="For users" links={['Login', 'Register', 'Settings', 'My Orders']} />
          </div>

          {/* Mobile App Links */}
          <div className="w-full lg:w-48">
            <h4 className="font-bold text-gray-900 mb-4">Get app</h4>
            <div className="flex flex-col gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 w-32 cursor-pointer hover:opacity-80 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10 w-32 cursor-pointer hover:opacity-80 transition-opacity" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#f0f0f0] py-4">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 Ecommerce. All rights reserved.</p>
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">
            <img src="https://flagcdn.com/w20/us.png" alt="US Flag" className="h-3" />
            <span>English</span>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper component for Footer Columns
function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-bold text-gray-900 mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index} className="text-gray-500 hover:text-blue-600 cursor-pointer text-[14px] transition-colors">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
