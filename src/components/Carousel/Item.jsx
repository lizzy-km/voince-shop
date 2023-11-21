import React from "react";

const Item = ({ src, hr }) => {
  if (hr.id == '0') {
    return (
      <div
        className="relative float-left -mr-[100%] w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-active
        data-te-carousel-item
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        <img src={src} className="block h-full" alt="..." />
        {/* <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 className="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
      </div>
    );
  } else {
    return (
      <div
        className="relative float-left hidden -mr-[100%] w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        data-te-carousel-item
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        <img src={src} className="block h-full" alt="..." />
        {/* <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 className="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div> */}
      </div>
    );
  }
};

export default Item;
