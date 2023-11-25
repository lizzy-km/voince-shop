import React from 'react'
import Rate from '../Rate';

const SearchItem = ({dta,searchTerm}) => {
   
    const text = dta?.name

    const highlightedText = text?.toLowerCase().replace(
        new RegExp(searchTerm, 'g'),
        `<span  style="color: #bf3428; font-size:12px; font-weight:600">$&</span>`
      );
    
    
      const formattedStr = highlightedText.replace(/(^\w|\s\w)/g, function(match) {
        return match.toUpperCase();
      });


  return (
    <div
                        className=" flex justify-start items-center cursor-pointer text-[12px] py-2 px-2 rounded hover:bg-[#222222e1] "
                        key={dta?.id}
                      >
                        <img
                          className=" h-[3rem] w-[3rem] object-cover rounded "
                          src={dta?.image?.url}
                          alt=""
                        />
                        <div className="p-2 flex flex-col justify-evenly items-start ">
                        <span className=' text-[12px] ' dangerouslySetInnerHTML={{ __html: formattedStr }} />

                          <Rate rate={4.5} />
                        </div>
                      </div>
  )
}

export default SearchItem
