import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {

  
const img = `${products[0].image.url}`


    return (
    <Link to={`/${products[0].name}`} className="  cursor-pointer flex flex-col h-[300px] w-[20%] justify-center items-center rounded bg-[#212121b0] ">
      <picture className="rounded h-[300px]" >
        <img className="rounded object-cover min-h-[300px]" src={img} type="image/webp" />
      </picture>
    </Link>
  );
};

export default ProductCard;
