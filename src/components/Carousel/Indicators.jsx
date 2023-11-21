import Button from "./Button";

const Indicators = ({hero}) => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
      data-te-carousel-indicators
    >
      {
        hero.map(hr => {
          return (
            <Button key={hr.id} hr={hr} />
          )
        })
      }

      
    </div>
  );
};

export default Indicators;
