import React from 'react'

const EmptyCart = () => {
  return (
    <div className='font-bold flex flex-col justify-center items-center'>
        <div className="text-blue-500 ">Cart is Empty, please add some Items!</div>
        <div><img alt="img" src='https://cdn.pixabay.com/photo/2015/11/06/11/50/shopping-cart-1026510_1280.jpg' width={400}></img></div>
        </div>
  )
}

export default EmptyCart;