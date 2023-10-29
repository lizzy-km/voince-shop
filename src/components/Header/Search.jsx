import { NavLink } from "react-router-dom/dist";

const Search = () => {
    
  const search = () => {
    const searchBar = document.getElementById("search");
    const searchBg = document.getElementById("searchBg");

    searchBar?.classList.remove("h-[0px]");
    searchBar?.classList.add("h-[450px]");
    searchBar?.classList.add("max-h-[450px]");

    searchBg?.classList.remove("z-[-1]");
    searchBg?.classList.add("z-[1]");
    searchBg?.classList.remove("h-[0px]");
    searchBg?.classList.add("h-screen");
  };

  const searchClose = () => {
    const searchBar = document.getElementById("search");
    const searchBg = document.getElementById("searchBg");

    searchBar?.classList.add("h-[0px]");
    searchBar?.classList.remove("h-[450px]");
    searchBar?.classList.remove("max-h-[450px]");

    searchBg?.classList.add("z-[-1]");
    searchBg?.classList.remove("z-[1]");
    searchBg?.classList.add("h-[0px]");
    searchBg?.classList.remove("h-screen");
  };

  return (
    <div className=" bg-[#212121] sticky-top   flex w-full h-[50px] justify-center items-center ">
      <div className=" flex w-[90%] h-[90%] justify-between items-center ">
        <div className=" flex justify-center items-center gap-1 ">
          <NavLink
            to={"/"}
            className=" flex justify-center items-center h-[40px]  "
          >
            <img
              className=" object-cover h-full  "
              src="/src/assets/Logo.svg"
              alt=""
            />
          </NavLink>
        </div>

        <div
          onClick={search}
          className=" relative     flex justify-start px-4 items-center h-full w-[75%] rounded-full bg-[#35343492]  border border-[#d8c7af] "
        >
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
          <div
            id="search"
            className=" z-[99] absolute left-0 top-0 flex flex-col backdrop-blur-lg bg-[#35343494]  h-[0px] w-full rounded-[25px] "
          ></div>
        </div>
        <div
          onClick={searchClose}
          id="searchBg"
          className=" pb-7  justify-end items-center text-[#212121] font-light text-xl whitespace-normal  z-[-1] absolute left-0 top-5 flex flex-col backdrop-blur-sm bg-[#35343425]  h-[0px] w-full  "
        >
          <p className="  ">Tap anywhere to close!</p>
        </div>

        <div className=" w-[15%] h-full flex justify-between items-center">
          <NavLink
            to={"/login"}
            className=" flex justify-evenly items-center gap-2 "
          >
            <img src="/src/assets/User.svg" alt="" />
            <p>Login</p>
          </NavLink>
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

export default Search;
