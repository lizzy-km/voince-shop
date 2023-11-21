import { useEffect } from "react";
import CatList from "./CatList";
import CategoryData from "./CategoryData";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../services/StateManage/CartSlice";

const Category = () => {
  const  {category}  = CategoryData();
 

  console.log(category);

  return (
    <div className="     flex w-[90%] h-[40px] py-1 justify-between items-center ">
      {category?.length < 1 && (
        <div className="  flex bg-[#2e2e2ea0]  w-[100%] justify-between items-center h-full  "></div>
      )}
      <div className="  flex  w-[100%] justify-between items-center h-full  ">
        {category?.length > 1 &&
          category?.reverse()?.map((categories) => {
            return <CatList key={categories.id} categories={categories} />;
          })}
      </div>
    </div>
  );
};

export default Category;
