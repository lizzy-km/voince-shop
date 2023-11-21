import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";
import Indicators from "../components/Carousel/Indicators";
import Controls from "../components/Carousel/Controls";
import CarouselProvider from "../components/Carousel/CarouselProvider";
import ItemHolder from "../components/Carousel/ItemHolder";
import Item from "../components/Carousel/Item";

const Hero = () => {
  useEffect(() => {
    initTE({ Carousel },true);
  }, []);

  // const control = document.getElementById('controls')

  // const ctrlWidth = control?.clientWidth

  const hero = [
    {
      id: "0",
      src: "https://img.ltwebstatic.com/images3_ccc/2023/11/17/80/17002296634babc09c8d4324589e2543310cb961be.webp",
    },
    {
      id: "1",
      src: "https://img.ltwebstatic.com/images3_ccc/2023/11/17/03/170022970285de61b26d2cf18925248d6963bf1905_thumbnail_2000x.webp",
    },
    {
      id: "2",
      src: "https://img.ltwebstatic.com/images3_ccc/2023/11/18/79/17002910897ca238384c8279ec15bfe1fbefb79e6b.webp",
    },
    {
      id: "3",
      src: "https://img.ltwebstatic.com/images3_ccc/2023/11/18/fe/1700291056876acf634a0ff41b506b27d6d24ef01e_thumbnail_2000x.webp",
    },
  ];

  return (
    <CarouselProvider>
      <Indicators hero={hero} num={hero.length} >
      <button 
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                     data-te-slide-to='0'
                      data-te-carousel-active
                    className="mx-[3px] box-content  h-[4px] w-[4px] rounded-full flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-[2px] -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label='1'
                  ></button>
                   <button 
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                     data-te-slide-to='1'
                    className="mx-[3px] box-content  h-[4px] w-[4px] rounded-full flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-[2px] -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label='2'
                  ></button>
                   <button 
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                     data-te-slide-to='2'
                    className="mx-[3px] box-content  h-[4px] w-[4px] rounded-full flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-[2px] -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label='3'
                  ></button>
                   <button 
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                     data-te-slide-to='3'
                    className="mx-[3px] box-content  h-[4px] w-[4px] rounded-full flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-[2px] -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label='4'
                  ></button>
        </Indicators>

      <ItemHolder>

        {
          hero.map(hr => {
            return(
              <Item hr={hr} key={hr.id} src={hr.src} />
            )
          })
        }

       
      </ItemHolder>

      <Controls />
    </CarouselProvider>
  );
};

export default Hero;
