import Category from "./Category";
import Search from "./Search";

const Header = () => {
  return (
    <div className="  text-[#d8c7af] flex w-full h-auto pb-1 flex-col-reverse justify-evenly items-center mt-2 ">
      <Category />

      <Search />
    </div>
  );
};

export default Header;
