import { StarRate } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Rate from "../Rate";

const ProductCard = ({ products }) => {
  const img = `${products[0].image.url}`;

  console.log(products);

  return (
    <div className=" p-2  cursor-pointer flex flex-col h-[370px] w-[25%] justify-center items-center rounded hover:shadow-md ">
      <Link to={`/${products[0].name}`} className="rounded h-full">
        <img
          className="rounded object-cover min-h-full"
          src={img}
          type="image/webp"
        />
      </Link>

      <div className=" py-1 w-full flex flex-col justify-start items-start ">
        <Link
          to={`/${products[0].name}`}
          className=" line-clamp-1 w-full overflow-hidden text-ellipsis align-middle  text-[14px] "
        >
          {products[0].name}
        </Link>
        <div className=" flex justify-start items-center ">
          <Rate rate={8} />
          <p className=" text-[12px] text-[#666] ">(1000+)</p>
        </div>

        <div className=" w-full flex justify-between items-center ">
          <p>{products[0].price.formatted_with_symbol}</p>
          <span className=" p-[2px] w-[50px] flex justify-center rounded-xl items-center bg-[#222222d5]  cursor-pointer ">
            <div className=" bg-[#fff] rounded-xl w-full flex justify-center items-center ">
              <img src="/src/assets/AddCart.svg" alt="" />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
