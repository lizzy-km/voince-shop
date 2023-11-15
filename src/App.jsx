import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";
import NavBar from "./components/Header/NavBar";
import NavBarM from "./components/Header/Header_M/NavBarM";
import useResponsive from "./Responsive";
import { useDispatch } from "react-redux";
import {
  allProducts,
  scrollTop,
  setScrollT,
} from "./services/StateManage/CartSlice";

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { commerce } from "./lib/commerce";
import { useEffect } from "react";
import CategoryView from "./pages/CategoryView";
import { useSelector } from "react-redux";
import { useState } from "react";
import { createRef } from "react";

const App = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await commerce?.products?.list();
    dispatch(allProducts({ products: response?.data }));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const scrollT = useSelector((state) => state.CartSlice.scrollT);

  const main = document.getElementById("main");
  const [offset, setOffset] = useState(0);
  const [isTop, setIsTop] = useState(true);

  const [currentPosition, setCurrentPosition] = useState(0);
  const [topPosition, setTopPosition] = useState(15);
  const box = document.getElementById("box");

  const useHandleScroll = (e) => {
    setOffset(e.target.scrollTop);
    if (40 < offset) {
      dispatch(scrollTop({ scroll: true }));
    } else {
      dispatch(scrollTop({ scroll: false }));
    }

    dispatch(setScrollT(e.target.scrollTop));

    for (let i = 0; i < scrollT.length; i++) {
      if (scrollT[i] < scrollT[i - 1]) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    }

    const maxScrollHeight = main?.scrollHeight - window.innerHeight;
    const newPosition = (main?.scrollTop / maxScrollHeight) * 90 + 1;
    const newTopPosition = (main?.scrollTop / maxScrollHeight) * 80 + 1; // Scale to the range [1, 80]

    // Ensure the newPosition is within the range [1, 100]
    const clampedPosition = Math.min(100, Math.max(1, newPosition));

    const clampedTopPosition = Math.min(90, Math.max(15, newTopPosition));

    setTopPosition(clampedTopPosition);
  };

  useEffect(() => {
    main?.scrollTop > 100 ? setCurrentPosition(1) : setCurrentPosition(0);
  }, [main?.scrollTop]);

  const boxWidth = box?.offsetWidth;
  const width = topPosition / 30;

  function runOnce(func, context) {
    let ran;
    return function () {
      if (func) {
        ran = func.apply(context || this, arguments);
        func = null;
      }
      return ran;
    };
  }

  const value = 5
  const sec =8

  const test = runOnce((a,b) => console.log('Testing', a,b) )

  useEffect(()=>{
    test( 'one_ ' +  main?.scrollTop,topPosition)
  test( 'two_ ' + main?.scrollTop,topPosition)
  test( 'three_ ' + main?.scrollTop,topPosition)
  },[main?.scrollTop,topPosition])

  

  const { mobile, tablet, desktop } = useResponsive();

  return (
    <BrowserRouter>
      <div
        id="main"
        onScroll={useHandleScroll}
        className=" transition-all pt-[140px] bg-[#d8c7af] relative w-full max-h-screen overflow-y-auto flex flex-col "
      >
        <div
          style={{
            opacity: currentPosition,
          }}
          onClick={() => main.scrollTo(0, 0)}
          className=" active:p-2 hover:p-1 w-[50px] h-[50px] flex justify-center items-center rounded-full z-[999999] cursor-pointer bottom-10 left-10 fixed p-2 bg-black text-[#d8c7af] "
        >
          <p className=" w-full text-center h-full bg-[#212121] rounded-full ">
            Up
          </p>
        </div>
        <div
          id="box"
          style={{
            top: topPosition + "vh",
            right: 0 + "vw",

            height: boxWidth,
            width: width + 2 + "%",
          }}
          className=" rounded-bl-[50px] p-2 rounded-tr-[50px] transition-all z-[9999999] bg-[#d8c7af] fixed   "
        >
          <div className=" p-1 hover:p-1 cursor-pointer rounded-full bg-[#685944] w-full h-full ">
            <div className=" p-1 sh rounded-t-full rounded-b-full bg-[#f0eeec] w-full h-full "></div>
          </div>
        </div>
        <div
          id="box"
          style={{
            top: topPosition + "vh",
            right: 0 + "vw",
            width: width + 2 + "%",
            height: boxWidth,
          }}
          className=" rounded-[50px] p-2  transition-all z-[9999999] bg-[#d8c7af] fixed   "
        >
          <div className=" p-1  hover:p-2 cursor-pointer rounded-full bg-[#685944] w-full h-full ">
            <div className=" p-1 sh rounded-t-full rounded-b-full bg-[#f0eeec] w-full h-full "></div>
          </div>
        </div>
        <div
          id="NavHeight"
          className=" w-full flex h-auto fixed top-0 z-[99999]  "
        >
          {mobile && <NavBarM />}
          {desktop && <NavBar />}
          {tablet && <NavBarM />}
        </div>

        <div className=" flex flex-col justify-center items-center h-auto w-full ">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:id" element={<ProductDetail />} />
            <Route path="/category/:id" element={<CategoryView />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
