import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commerce } from "../lib/commerce";
import { useSelector } from "react-redux";

const useMain =()=>{
    const {id} = useParams()

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
      const response = await commerce.products.list();
      setProducts((response && response.data) || []);
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);

    const [filter,setFilter] = useState([])
    const catName = useSelector((state)=> state.CartSlice.catName)

    useEffect(()=> {
        setFilter(products.filter(data => data.categories[0].name === catName) )
    },[catName])
     

    return {
        id,
        products,
        filter,
        catName
    };
}

export default useMain
