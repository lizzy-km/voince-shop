import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/dist'
import ProductCard from '../components/Content/ProductCard';

const CategoryView = () => {
    const {id} = useParams()
    const products = useSelector((state)=> state.CartSlice.products)
    const catName = Cookies.get('catName')

  

    const filterProducts = products
    // .filter(data => data.categories[0].name === catName)

    console.log(filterProducts);

  return (
    <div className=' flex flex-col w-full ' >
      <div className=' flex  gap-[5%] p-[1rem] w-[90%] h-auto bg-[#d8c7af] ' >
      {
        filterProducts?.length > 0 && filterProducts.map(products => {
          return(
            <ProductCard key={products.id} products={products}  />
          )
        })
      }
     
    </div>
    </div>
    
  )
}

export default CategoryView
