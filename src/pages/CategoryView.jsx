import { useParams } from 'react-router-dom/dist'

const CategoryView = () => {
    const {id} = useParams()

  return (
    <div>
      {id}
    </div>
  )
}

export default CategoryView
