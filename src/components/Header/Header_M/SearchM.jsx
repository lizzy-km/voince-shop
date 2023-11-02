import { Link, NavLink } from "react-router-dom/dist";
import Slide from "./Slide";

const SearchM = () => {

    const {open,openSearch,closeSearch} = Slide()

   

  return (
    <div className=" w-[100%] h-[50px] flex justify-center items-center ">
      <div className=" flex w-[90%] h-[90%] justify-between items-center ">
        <div className=" w-[45%] flex justify-between  items-center ">
            <div onClick={open}  className=" flex  items-center w-[40px]  ">
                <img src="/src/assets/Menu.svg" alt="" />
            </div>
          <NavLink
            to={"/"}
            className=" flex  items-center h-[30px]  "
          >
            <img
              className=" object-cover w-[90px]  "
              src="/src/assets/Name.svg"
              alt=""
            />
          </NavLink>
        </div>

        <div className=" w-[60%] flex justify-end gap-2 items-center " >
        <div onClick={openSearch} className="     flex justify-center  items-center h-[40px] w-[40px]   border border-[#d8c7af] ">
          <img className="  " src="/src/assets/Search.svg" alt="" />
        
        </div>

          
          <NavLink
            to={"/favourite"}
            className=" flex justify-evenly items-center "
          >
            <img src="/src/assets/Heart.svg" alt="" />
          </NavLink>
          <NavLink to={"/cart"} className=" flex justify-evenly items-center ">
            <img src="/src/assets/Cart.svg" alt="" />
          </NavLink>
        </div>
       
      </div>

      <div id="searchBox" className=" flex  flex-row-reverse justify-center items-start py-[1rem] transition-[all .4s ease-linear] absolute w-full h-screen top-0 right-[-130%] bg-[#21212181] backdrop-blur-md " >
        <div className=" w-[90%] h-[40px] flex justify-between items-center " >
        <div className=" relative flex justify-start px-4 items-center h-[40px] w-[80%] rounded-full bg-[#35343492]  border border-[#d8c7af] ">
          <img
            className=" z-[999] opacity-50 "
            src="/src/assets/Search.svg"
            alt=""
          />
          <input
            placeholder="Search"
            className=" backdrop-blur-lg z-[999] placeholder-[#d8c7af7c] text-left flex items-center justify-center h-[95%] p-2 rounded-full w-[95%]   bg-transparent text-[#d8c7af] "
            type="text"
            name=""
            id=""
          />
        
        </div>
        <div onClick={closeSearch} >
        <img className=" w-[40px] h-[40px] rounded-full bg-[#212121b8] p-[10px] " src="/src/assets/Close.svg" alt="" />
       </div>
        </div>
       

       
      </div>
    </div>
  );
};

export default SearchM;
