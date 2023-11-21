import React from "react";
import { NavLink } from "react-router-dom";
import useMain from "../../pages/Main";
import { useDispatch } from "react-redux";
import { setCatName } from "../../services/StateManage/CartSlice";

const CatList = ({ categories }) => {

  const dispatch = useDispatch()  

  return (
    <div
      className="  flex justify-center items-center text-sm cursor-pointer "
      key={categories.id}
    >
      <NavLink  onClick={()=> dispatch(setCatName({catName:categories.name}))} to={`/category/${categories.slug}`} >{categories.name}</NavLink>
    </div>
  );
};

export default CatList;
