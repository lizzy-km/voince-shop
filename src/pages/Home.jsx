import Hero from "../components/Content/Hero";

const Home = () => {



  return (
    <div className=" justify-center items-center flex flex-col w-full h-auto  " >
      <Hero/>

      <div className=" flex w-full h-auto justify-center items-center my-[1rem] " >
        <p>Content</p>
      </div>
    </div>
   
  );
};

export default Home;
