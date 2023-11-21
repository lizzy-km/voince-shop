import { useSelector } from "react-redux";
import Category from "./Category";
import Search from "./Search";

const Header = () => {
  const state = useSelector((state) => state.CartSlice.scroll);

  return (
    <div className="  text-[#f4f2f0] flex w-full h-auto pb-1 flex-col-reverse justify-evenly items-center my-2 ">
      <Category />

      <Search />
    </div>
  );
};

export default Header;
