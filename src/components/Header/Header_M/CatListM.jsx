import { NavLink } from "react-router-dom/dist"
import Slide from "./Slide"

const CatListM = ({categories}) => {
    const {close} = Slide()
  return (
    <div
    className=" flex justify-center items-center text-sm cursor-pointer "
    key={categories.id}
  >
    <NavLink onClick={close} to={`/category/${categories.slug}`} >{categories.name}</NavLink>
  </div>
  )
}

export default CatListM
