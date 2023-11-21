import React from 'react'
import Item from './Item'

const ItemHolder = ({children}) => {
  return (
    <div className="relative w-full h-full overflow-hidden after:clear-both after:block after:content-['']">
      {children}
    </div>
  )
}

export default ItemHolder
