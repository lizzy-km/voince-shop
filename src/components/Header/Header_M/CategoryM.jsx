import React, { useEffect, useState } from 'react'
import { commerce } from '../../../lib/commerce';
import CatListM from './CatListM';
import { NavLink } from 'react-router-dom/dist';
import Slide from './Slide';

const CategoryM = () => {
    const [category, setCategory] = useState([]);

    const fetchProducts = async () => {
      const response = await commerce.categories.list();
      setCategory((response && response.data) || []);
    };


  
    useEffect(() => {
      fetchProducts();
      
    }, []);
    
    const { close } = Slide()

  
    return (
      <div id='slide' className=" left-[-150%] text-[#d8c7af] top-0 backdrop-blur-lg absolute bg-[#212121d9] z-[9999]  flex flex-col w-[100%] h-screen py-1 justify-start items-start ">
        <div className=' flex justify-between items-center w-full p-[1rem] ' >
            <NavLink to={'/'} >
            <img onClick={close} className=' h-[22px] ' src="/src/assets/name.svg" alt="" />

            </NavLink>

            <img onClick={close} src="/src/assets/Close.svg" alt="" />
        </div>
        <div className="  flex flex-col w-[100%] p-[1rem] justify-start gap-3 items-start h-auto  ">
            {category.length > 0 &&
              category.map((categories) => {
                return <CatListM onClick={close} key={categories.id} categories={categories} />;
              })}
        </div>
        <div className=' mt-3 w-full max-h-[0.6px] px-[1rem] flex bg-[#b5b59872]  ' >
        <NavLink onClick={close} to={'/login'} className=" flex justify-evenly items-center pt-8 gap-2 ">
            <img src="/src/assets/User.svg" alt="" />
            <p>Login</p>
          </NavLink>
        </div>
      </div>
    );
}

export default CategoryM
