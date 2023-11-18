import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
const ProductDetail = () => {
    const {id} = useParams()
    const products = useSelector((state)=> state.CartSlice.filterProducts)

  return (
    <div>
      {id}
    </div>
  )
}

export default ProductDetail
