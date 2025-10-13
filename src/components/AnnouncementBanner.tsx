import React from 'react';

const AnnouncementBanner = () => {
  return (
    <div className="bg-gradient-to-r from-cloud-600 to-cloud-700 text-white py-2 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap inline-block">
        <span className="text-sm font-semibold mx-4">
          🎉 Limited Period Offer: Flat 50% Off! 🎉
        </span>
        <span className="text-sm font-semibold mx-4">
          🎉 Limited Period Offer: Flat 50% Off! 🎉
        </span>
        <span className="text-sm font-semibold mx-4">
          🎉 Limited Period Offer: Flat 50% Off! 🎉
        </span>
        <span className="text-sm font-semibold mx-4">
          🎉 Limited Period Offer: Flat 50% Off! 🎉
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
