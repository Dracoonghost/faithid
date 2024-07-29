import React from 'react'
import AddToCart from './AddToCart'

 
const ProductCard = () => {
  return (
    <div className='p-6 my-5 bg-sky-400 text-white text-3xl hover:bg-sky-900'>
        <AddToCart />
    </div>
  )
}

export default ProductCard