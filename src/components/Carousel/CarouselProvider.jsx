import React, { useEffect } from 'react'
import { Carousel, initTE } from "tw-elements";

const CarouselProvider = ({children}) => {
    useEffect(() => {
        initTE({ Carousel }, true);
      }, []);
  return (
    <div
    id="carouselExampleCaptions"
    className="relative w-[90%] bg-[#212121] h-[240px] "
    data-te-carousel-init
    data-te-ride="carousel"
    >
      {children}
    </div>
  )
}

export default CarouselProvider
