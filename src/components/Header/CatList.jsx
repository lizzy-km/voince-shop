import React from "react";
import { NavLink } from "react-router-dom";

const CatList = ({ categories }) => {
  return (
    <div
      className=" flex justify-center items-center text-sm cursor-pointer "
      key={categories.id}
    >
      <NavLink to={`/category/${categories.slug}`} >{categories.name}</NavLink>
    </div>
  );
};

export default CatList;
