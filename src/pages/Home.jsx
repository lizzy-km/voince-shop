import React, { useEffect, useMemo, useRef, useState } from "react";
import { commerce } from "../lib/commerce";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.categories.list();
    setProducts((response && response.data) || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className=" relative items-center  flex w-full h-auto bg-[#d8c7af] flex-col ">
      <div className=" w-full h-auto flex flex-col justify-center items-center ">
        <div className=" card m-[2rem]  h-[280px] bg-white "></div>
        <div className=" card m-[2rem]  h-[280px] bg-white "></div>
        
      </div>
    </div>
  );
};

export default Home;
