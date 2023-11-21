import Header from "./Header";

const NavBar = () => {


    return (
      <div id="navBar" className="  w-full h-auto bg-[#212121] flex  justify-between items-start ">
        <div className=" w-[100%] h-[100%] flex justify-normal flex-col ">
          <div className=" text-[#d8c7af] py-1 flex w-full bg-[#38383880] justify-center items-center gap-2 ">
            <img src="/src/assets/Car.svg" alt="" />{" "}
            <p className="  capitalize text-capitalize font-light text-[12px]  ">
              FREE SHIPPING FOR ORDERS OVER $50
            </p>
          </div>
          <Header />
        </div>
      </div>
    )
};

export default NavBar;
