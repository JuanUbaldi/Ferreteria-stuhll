import React from 'react'

const ProductHomeLayout = (props) => {
  return (
    <div><h2>{props.title}</h2>
    <img src={props.img} alt={props.title} /></div>
  )
}

export default ProductHomeLayout