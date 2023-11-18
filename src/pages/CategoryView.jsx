import { useEffect, useState } from "react";
import ProductCard from "../components/Content/ProductCard";
import { useGetProductByCategory } from "./Function";
import Cookies from "js-cookie";

const CategoryView = () => {
  const [cate, setCate] = useState(null);
  const { data, cat } = useGetProductByCategory(cate);
  const catName = Cookies?.get("catName");

  useEffect(() => {
    setCate(null);
  }, [catName]);

  return (
    <div className=" flex flex-col w-full justify-start items-start h-screen p-[5%] ">
      <div className=" w-full h-full flex justify-between items-start ">
        <div className=" text-[#212121] flex flex-col w-[20%] rounded h-auto p-2 justify-start items-start ">
          <h1 className=" ">Category</h1>
          <form className=" flex w-full flex-col p-1 gap-1 justify-start items-center ">
            {cat.length > 0 &&
              cat.map((category) => (
                <label
                  className=" cursor-pointer rounded gap-2 flex justify-start items-center w-full "
                  id={category.id}
                  key={category.id}
                >
                  <input
                    onClick={() => setCate(category.name)}
                    name="category"
                    id={category.id}
                    value={category.name}
                    type="radio"
                    key={category.id}
                    className="  rounded    "
                  />
                  <p>{category.name}</p>
                </label>
              ))}
          </form>
        </div>
        <div className=" flex  gap-[5%] p-[1rem] w-[80%] h-auto bg-[#d8c7af] ">
          {data?.length > 2 &&
            data !== null &&
            data.map((products) => {
              return <ProductCard key={products.id} products={products} />;
            })}
          {
            data?.length < 2 && data.length > 0 && (
              // data.map((products) => (
              <ProductCard key={data.id} products={data} />
            )
            // ))
          }
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
