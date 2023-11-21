import Indicators from "../components/Carousel/Indicators";
import Controls from "../components/Carousel/Controls";
import CarouselProvider from "../components/Carousel/CarouselProvider";
import ItemHolder from "../components/Carousel/ItemHolder";
import Item from "../components/Carousel/Item";

const Hero = () => {
  const hero = [
    {
      id: "1",
      src: "https://img.ltwebstatic.com/images3_ccc/2023/11/17/80/17002296634babc09c8d4324589e2543310cb961be.webp",
    },
    {
      id: "2",
      src: "https://img.ltwebstatic.com/images3_ccc/2023/11/17/03/170022970285de61b26d2cf18925248d6963bf1905_thumbnail_2000x.webp",
    },
    {
      id: "3",
      src: "https://img.ltwebstatic.com/images3_ccc/2023/11/18/79/17002910897ca238384c8279ec15bfe1fbefb79e6b.webp",
    },
    {
      id: "4",
      src: "https://img.ltwebstatic.com/images3_ccc/2023/11/18/fe/1700291056876acf634a0ff41b506b27d6d24ef01e_thumbnail_2000x.webp",
    },
  ];

  return (
    <CarouselProvider>
      <Indicators num={hero.length} />

      <ItemHolder>
        {
          hero.map(hr => {
            return(
              <Item key={hr.id} src={hr.src} />

            )
          })
        }
      
        {/* {hero.map(heros => {
          return 
           
            {heros.src}
          </Item>;
        })} */}
        
      </ItemHolder>

      <Controls />
    </CarouselProvider>
  );
};

export default Hero;
