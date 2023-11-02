import { useSelector } from "react-redux";
import Category from "./Category";
import Search from "./Search";
import { useEffect } from "react";

const Header = () => {
  const state = useSelector((state) => state.CartSlice.scroll);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="  text-[#d8c7af] flex w-full h-auto pb-1 flex-col-reverse justify-evenly items-center my-2 ">
     
     { state == false && <Category />
     }

      <Search />
    </div>
  );
};

export default Header;
