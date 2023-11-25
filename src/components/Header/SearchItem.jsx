import React, { useEffect, useState } from "react";
import Rate from "../Rate";
import { Highlight } from "./Highlight";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { addHistory } from "../../services/StateManage/CartSlice";

const SearchItem = ({ dta, searchTerm, searchClose }) => {
  const text = dta?.name;

  const { formattedStr } = Highlight(text, searchTerm);

  const [history, setHistory] = useState([]);
  const dispatch = useDispatch();

  const searchHist = useSelector((state) => state.CartSlice.history);

  const isExisted = searchHist?.find((d) => d.id === dta.id);


  const onSearch = () => {
    setHistory([...history, dta]);

    isExisted ? null : dispatch(addHistory({ history: dta }));

    searchClose();
  };

  return (
    <Link
      onClick={onSearch}
      to={`/${dta.permalink}`}
      className=" flex justify-start items-center cursor-pointer text-[12px] py-2 px-2 rounded hover:bg-[#222222e1] "
      key={dta?.id}
    >
      <img
        className=" h-[3rem] w-[3rem] object-cover rounded "
        src={dta?.image?.url}
        alt=""
      />
      <div className="p-2 flex flex-col justify-evenly items-start ">
        <span
          className=" text-[12px] "
          dangerouslySetInnerHTML={{ __html: formattedStr }}
        />

        <Rate rate={4.5} />
      </div>
    </Link>
  );
};

export default SearchItem;
