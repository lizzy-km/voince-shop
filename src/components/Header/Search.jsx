import { Link, NavLink } from "react-router-dom/dist";
import CategoryData from "./CategoryData";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const search = () => {
    const searchBar = document.getElementById("search");
    const searchBg = document.getElementById("searchBg");
    const searchDetail = document.getElementById("searchDetail");
    const tapToClose = document.getElementById("tapToClose");

    searchBar?.classList.remove("h-[0px]");
    searchBar?.classList.add("h-[450px]");
    searchBar?.classList.add("max-h-[450px]");
    searchBar?.classList.remove("opacity-0");
    searchDetail?.classList.remove("d-n");


    searchBg?.classList.remove("z-[-1]");
    searchBg?.classList.add("z-[1]");
    searchBg?.classList.remove("h-[0px]");
    searchBg?.classList.add("h-screen");
    searchBg?.classList.add('pb-7')

    tapToClose?.classList.remove('d-n')
  };

  const searchClose = () => {
    const searchBar = document.getElementById("search");
    const searchBg = document.getElementById("searchBg");
    const searchDetail = document.getElementById("searchDetail");
    const tapToClose = document.getElementById("tapToClose");

    searchBar?.classList.add("h-[0px]");
    searchBar?.classList.remove("h-[450px]");
    searchBar?.classList.remove("max-h-[450px]");
    searchBar?.classList.add("opacity-0");
    searchDetail?.classList.add("d-n");

    searchBg?.classList.add("z-[-1]");
    searchBg?.classList.remove("z-[1]");
    searchBg?.classList.add("h-[0px]");
    searchBg?.classList.remove("h-screen");
    searchBg?.classList.remove('pb-7')

    tapToClose?.classList.add('d-n')
  };

  const { category } = CategoryData();

    const state = useSelector((state) => state.CartSlice.scroll);

    useEffect(() => {
      console.log(state);
    }, [state]);

  // if (state ) {
    return (
      <div className=" bg-[#212121] sticky-top  sticky  flex w-full h-[50px] justify-center items-center ">
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

        <div className=" relative     flex justify-start px-4 items-center h-full w-[75%] rounded-full bg-[#35343492]  border border-[#d8c7af] ">
          <img
            className=" z-[999] opacity-50 "
            src="/src/assets/Search.svg"
            alt=""
          />
          <input
            onClick={search}
            placeholder="Search"
            className=" backdrop-blur-lg z-[999] placeholder-[#d8c7af7c] text-left flex items-center justify-center h-[95%] p-2 rounded-full w-[95%]   bg-transparent text-[#d8c7af] "
            type="text"
            name=""
            id=""
          />
          <div
            id="search"
            className=" opacity-0 z-[99] absolute left-0 top-0 flex  flex-col justify-center items-center backdrop-blur-lg bg-[#35343494]  h-[0px] w-full rounded-[25px] "
          >
            <div
              id="searchDetail"
              className=" d-n flex flex-col justify-between w-[90%] h-[80%] py-[1rem] "
            >
              <div>
                <p className=" py-[1rem] text-base font-semibold ">
                  Previous Searches
                </p>
                <div>
                  <p className="text-lg font-light">No search history</p>
                </div>
              </div>

              <div>
                <p className=" py-[1rem] text-base font-semibold ">
                  Popular Categories
                </p>
                <div className=" flex gap-2 ">
                  {!category.length && (
                    <div className="flex justify-center items-center h-[100px] w-[90px] bg-[#2121216c] rounded-xl "></div>
                  )}

                  {category.length > 0 &&
                    category
                      .filter((cat, index) => index < 5)
                      .map((data) => {
                        return (
                          <Link
                            onClick={searchClose}
                            to={`/category/${data.name}`}
                            id="category"
                            key={data.id}
                            className="flex relative justify-center items-center h-[120px] w-[90px] bg-[#2121216c] rounded-xl "
                          >
                            {data.assets.map((img) => (
                              <img
                                onClick={searchClose}
                                key={img.id}
                                className=" object-cover rounded-xl h-full "
                                src={img.url}
                                alt={data.name}
                              />
                            ))}
                            <div
                              onClick={searchClose}
                              id="catName"
                              className=" rounded-xl backdrop-blur-[4px] text-xs text-center bg-[#2121217b] flex justify-center items-center w-[100%] h-[40%] absolute top-0 left-0 "
                            >
                              <p>{data.name}</p>
                            </div>
                          </Link>
                        );
                      })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={searchClose}
          id="searchBg"
          className=" pb-7  justify-end items-center text-[#212121] font-light text-xl whitespace-normal  z-[-1] absolute left-0 top-[-10px] flex flex-col backdrop-blur-sm bg-[#35343425]  h-[0px] w-full  "
        >
          <p id="tapToClose" className=" d-n ">Tap anywhere to close!</p>
          
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
          <NavLink
            to={"/cart"}
            className=" flex justify-evenly items-center "
          >
            <img src="/src/assets/Cart.svg" alt="" />
          </NavLink>
        </div>
      </div>
    </div>
    );
//   } else {
//     return (
     

// <><div className=" relative flex justify-start px-4 items-center h-full w-[75%] rounded-full bg-[#353434]  border border-[#d8c7af] ">
// <img
//   className=" z-[999] opacity-50 "
//   src="/src/assets/Search.svg"
//   alt="" />
// <input
//   onClick={search}
//   placeholder="Search"
//   className=" backdrop-blur-lg z-[999] placeholder-[#d8c7af7c] text-left flex items-center justify-center h-[95%] p-2 rounded-full w-[95%]   bg-transparent text-[#d8c7af] "
//   type="text"
//   name=""
//   id="" />
// <div
//   id="search"
//   className=" opacity-0 z-[99] absolute left-0 top-0 flex  flex-col justify-center items-center backdrop-blur-lg bg-[#35343494]  h-[0px] w-full rounded-[25px] "
// >
//   <div
//     id="searchDetail"
//     className=" d-n flex flex-col justify-between w-[90%] h-[80%] py-[1rem] "
//   >
//     <div>
//       <p className=" py-[1rem] text-base font-semibold ">
//         Previous Searches
//       </p>
//       <div>
//         <p className="text-lg font-light">No search history</p>
//       </div>
//     </div>

//     <div>
//       <p className=" py-[1rem] text-base font-semibold ">
//         Popular Categories
//       </p>
//       <div className=" flex gap-2 ">
//         {!category.length && (
//           <div className="flex justify-center items-center h-[100px] w-[90px] bg-[#2121216c] rounded-xl "></div>
//         )}

//         {category.length > 0 &&
//           category
//             .filter((cat, index) => index < 5)
//             .map((data) => {
//               return (
//                 <Link
//                   onClick={searchClose}
//                   to={`/category/${data.name}`}
//                   id="category"
//                   key={data.id}
//                   className="flex relative justify-center items-center h-[120px] w-[90px] bg-[#2121216c] rounded-xl "
//                 >
//                   {data.assets.map((img) => (
//                     <img
//                       onClick={searchClose}
//                       key={img.id}
//                       className=" object-cover rounded-xl h-full "
//                       src={img.url}
//                       alt={data.name} />
//                   ))}
//                   <div
//                     onClick={searchClose}
//                     id="catName"
//                     className=" rounded-xl backdrop-blur-[4px] text-xs text-center bg-[#2121217b] flex justify-center items-center w-[100%] h-[40%] absolute top-0 left-0 "
//                   >
//                     <p>{data.name}</p>
//                   </div>
//                 </Link>
//               );
//             })}
//       </div>
//     </div>
//   </div>
// </div>
// </div><div
// onClick={searchClose}
// id="searchBg"
// className="   justify-end items-center text-[#212121] font-light text-xl whitespace-normal  z-[-1] absolute left-0 top-0 flex flex-col backdrop-blur-sm bg-[#35343425]  h-[0px] w-full  "
// >
//   <p className="  ">Tap anywhere to close!</p>
// </div></>
//     );
//   }
};

export default Search;
