import { NavLink } from "react-router-dom/dist";
import Slide from "./Slide";

const SearchM = () => {

    const {open} = Slide()

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
        <div className="     flex justify-center  items-center h-[40px] w-[40px]   border border-[#d8c7af] ">
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
    </div>
  );
};

export default SearchM;
