import React, { useEffect, useMemo, useState } from 'react'
import { commerce } from '../lib/commerce';
import NavBar from '../components/Header/NavBar';

const Home = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
       const response = await commerce.categories.list()
       setProducts((response && response.data) || [])
      }

      useEffect(() => {
        fetchProducts();
      }, []);
  return (
    <div className=' relative items-center overflow-auto max-h-screen flex w-full h-screen bg-[#d8c7af] flex-col ' >
      
      <div className=' w-full h-auto flex flex-col justify-center items-center ' >
        
     
      <div className=' m-[2rem] w-[80%] h-[280px] bg-white ' >
        
      </div>
      <div className=' m-[2rem] w-[80%] h-[280px] bg-white ' >
        
      </div>
      <div className=' m-[2rem] w-[80%] h-[280px] bg-white ' >
        
      </div>
      <div className=' m-[2rem] w-[80%] h-[280px] bg-white ' >
        
      </div>
      <div className=' m-[2rem] w-[80%] h-[280px] bg-white ' >
        
      </div>
      <div className=' m-[2rem] w-[80%] h-[280px] bg-white ' >
        
      </div>
      </div>
    </div>
  )
}

export default Home
