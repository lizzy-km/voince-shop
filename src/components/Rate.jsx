import React from 'react'
import ReactStars  from 'react-rating-stars-component'

const Rate = ({rate}) => {
   

  return (
    <ReactStars
    count={5}
    value={rate}
    edit={false}
    size={16}
    activeColor="#ffd700"
    />
    
  )
}

export default Rate
