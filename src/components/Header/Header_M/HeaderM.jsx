import { useState } from "react"
import CategoryM from "./CategoryM"
import SearchM from "./SearchM"

const HeaderM = () => {
    const [side,setSide] = useState(false)
  return (
    <div className=' flex bg-[#212121] justify-between items-center w-full ' >
            
      <CategoryM side={side} />
      <SearchM/>
    </div>
  )
}

export default HeaderM
