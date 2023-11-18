import React from "react";

const ProductCard = ({ products }) => {

  


    return (
    <div className=" cursor-pointer flex flex-col h-[300px] w-[20%] justify-center items-center rounded bg-[#212121b0] ">
      <picture>
        <source srcset={products?.image?.url} type="image/webp" />
      </picture>
    </div>
  );
};

export default ProductCard;
