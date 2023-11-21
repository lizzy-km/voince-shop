
const Indicators = ({num}) => {

    const indi = []

    for (let index = 0; index < num; index++) {
        indi.push({id:index})
        
    }



  return (
    <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        {
            indi?.map(ind => 
                {return(
                    <button key={ind.id}
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide-to="0"
                    data-te-carousel-active
                    className="mx-[3px] box-content  h-[4px] w-[4px] rounded-full flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-[2px] -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                )
            })
        }
       
       
      </div>
  )
}

export default Indicators
