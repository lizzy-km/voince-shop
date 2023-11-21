import  { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import { useDispatch } from "react-redux";
import { addCategory } from "../../services/StateManage/CartSlice";

const CategoryData = () => {
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch()


  const fetchProducts = async () => {
    const response = await commerce.categories.list();
    setCategory((response && response.data) || []);
    dispatch(addCategory((response && response.data) || []))
  };


  useEffect(() => {
    fetchProducts();
    
  }, []);

  return { category };
};

export default CategoryData;
