import React from 'react';
import Sidebar from '../Sidebar';
import RightSidebar from '../RightSidebar';
import DealsSection from '../DealsSection';
import CategoryBlock from '../CategoryBlock';
import InquirySection from '../InquirySection';
import RecommendedItems from '../RecommendedItems';
import ExtraServices from '../ExtraServices';
import RegionSection from '../RegionSection';
import Newsletter from '../Newsletter'; // Naya import
import Footer from '../Footer';
import hero from '../../assets/hero.png';

export default function Home() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-5">
        
        {/* 1. HERO SECTION */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col lg:flex-row gap-4 shadow-sm">
          <Sidebar />
          <div className="flex-1 bg-[#E3F2FD] rounded-md relative overflow-hidden min-h-[380px] flex items-center">
            <div className="relative z-10 p-10 max-w-md">
              <h3 className="text-xl text-gray-700 font-medium">Latest trending</h3>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-8 leading-tight">Electronic items</h2>
              <button className="bg-white text-gray-900 px-6 py-2.5 rounded-md font-semibold hover:shadow-md transition-all">Source now</button>
            </div>
            <div className="absolute right-0 top-0 h-full w-full pointer-events-none">
              <img src={hero} alt="Banner" className="h-full w-full object-contain object-right" /> 
            </div>
          </div>
          <RightSidebar />
        </div>

        {/* 2. DEALS SECTION */}
        <DealsSection />

        {/* 3. CATEGORY BLOCKS */}
        <CategoryBlock 
          title="Home and outdoor" 
          bannerImg="https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=400&q=80" 
        />
        <CategoryBlock 
          title="Consumer electronics" 
          bannerImg="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80" 
        />

        {/* 4. INQUIRY SECTION */}
        <InquirySection />

        {/* 5. RECOMMENDED ITEMS */}
        <RecommendedItems />

        {/* 6. EXTRA SERVICES */}
        <ExtraServices />

        {/* 7. REGIONS SECTION */}
        <RegionSection />

      </div>

      {/* 8. NEWSLETTER (Container se bahar taake background poori width par ho) */}
      <Newsletter />

      {/* 9. FOOTER */}
      <Footer />
      
    </div>
  );
}