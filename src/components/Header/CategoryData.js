import  { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";

const CategoryData = () => {
  const [category, setCategory] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.categories.list();
    setCategory((response && response.data) || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { category };
};

export default CategoryData;
