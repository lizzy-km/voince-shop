import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";
import Indicators from "../Carousel/Indicators";
import Controls from "../Carousel/Controls";
import CarouselProvider from "../Carousel/CarouselProvider";
import ItemHolder from "../Carousel/ItemHolder";
import Item from "../Carousel/Item";

const Hero = () => {
  useEffect(() => {
    initTE({ Carousel }, true);
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
      <Indicators hero={hero} num={hero.length} />

      <ItemHolder>
        {hero.map((hr) => {
          return <Item hr={hr} key={hr.id} src={hr.src} />;
        })}
      </ItemHolder>

      <Controls />
    </CarouselProvider>
  );
};

export default Hero;
