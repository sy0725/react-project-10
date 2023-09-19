import React from 'react';
import Gallery from '@/assets/LandingPage-gallery.svg';

function LandingPagePartFour() {
  return (
    <div>
      <div className="flex justify-around bg-gray-100/30 lg:w-[38.75rem]">
        <img src={Gallery} alt="plane" />

        <div className="relative flex flex-col justify-center py-[1.6875rem]  pl-[1.723125rem] font-semibold text-contentsPrimary">
          <p>다녀온 여행을</p>
          <p>추억으로 남겨보세요!</p>
          <div
            className="absolute
bottom-7  h-2 w-[8.775rem] bg-custom-color/40"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPagePartFour;
