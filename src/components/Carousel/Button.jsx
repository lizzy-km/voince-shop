import React from 'react'

const Button = ({hr}) => {


    if (hr.id == '0') {
        return (
            <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to={hr.id}
            data-te-carousel-active
            className="mx-[3px] box-content  h-[4px] w-[4px] rounded-full flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-[2px] -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label={"Slide"+ hr.id+1}
          ></button>
          )
    }else {
        return (
            <button
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to={hr.id}
            className="mx-[3px] box-content  h-[4px] w-[4px] rounded-full flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-[2px] -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label={"Slide"+hr.id+1}
          ></button>
          )
    }

  
}

export default Button
