import { useEffect, useState } from "react";
import ProductCard from "../components/Content/ProductCard";
import { useGetProductByCategory } from "./Function";
import Cookies from "js-cookie";
import { Link, NavLink, useParams } from "react-router-dom";

const CategoryView = () => {
  const [cate, setCate] = useState(null);
  const { data, cat } = useGetProductByCategory(cate);
  const catName = Cookies?.get("catName");
  const {id} = useParams()

  useEffect(() => {
    setCate(null);
  }, [catName]);

  console.log(data);

  return (
    <div className=" flex flex-col w-full justify-start items-start h-auto px-[5%] py-1 ">
      <div className=" text-[#222] text-[14px] flex justify-start items-start gap-2 " >
        <NavLink to={'/'} >
          Home /
        </NavLink>
        <NavLink to={`/category/${id}`}>
        {
          catName
        }
        </NavLink>
      </div>
      <div className=" rounded flex w-full bg-[#f6f6f6] h-[130px] p-[24px]  " >
        <div className=" flex w-full h-full flex-col justify-start items-start gap-1 " >
          <h1 className=" text-[20px] text-[#666] font-[700] " >
            {
              catName
            }
          </h1>
          </div>
      </div>
      <div className=" w-full h-full flex justify-between items-start ">
        <div className=" text-[#212121] flex flex-col w-[20%] rounded h-auto p-2 justify-start items-start ">
          <h3 className=" text-[14px] font-[700] ">Category</h3>
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
                  <p className=" text-[12px] " >{category.name}</p>
                </label>
              ))}
          </form>
        </div>
        <div className=" flex flex-wrap  gap-[5%] p-[1rem] w-[80%] h-auto bg-[#ffffff] ">
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
