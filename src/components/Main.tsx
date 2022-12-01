import React, { useState } from "react";
import {SlBasket} from 'react-icons/sl'

function Main() {
  const [addProducts, setAddProducts] = useState(0);

  const negativeProducts = () => {
    if (addProducts < 0) {
      return setAddProducts(addProducts + 1);
    }
  }

  return (
    <div className='px-6 py-4 sm:px-0 flex flex-col gap-3 sm:pt-10 sm:max-w-[29rem]'>
      <h3 className='text-mainOrange font-kumbh'>Sneaker Company</h3>
      <h1 className='font-bold text-3xl'>Fall Limited Edition Sneakers</h1>
      <p className='text-slate-500'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className='flex flex-row items-center'>
        <span className='flex flex-row items-center gap-4'>
          <strong className='text-2xl'>$125.00</strong>
          <p className='text-mainOrange bg-paleOrange rounded-md px-2'>50%</p>
        </span>
          <p className="line-through text-slate-500 ml-auto">$250.00</p>
      </div>
      <div className='sm:flex flex-row gap-8 max-w-max'>
      <div className="flex flex-row justify-between border bg-slate-100 p-3 rounded-lg">
        <button className="text-mainOrange font-black" onClick={() => setAddProducts(addProducts - 1)}>-</button>
        <p>{addProducts}</p> 
        <button className="text-mainOrange font-black" onClick={() => setAddProducts(addProducts + 1)}>+</button>
      </div>

      <button className='flex flex-row gap-3 items-center justify-center bg-mainOrange text-white py-3 rounded-md w-full'>
        <SlBasket className='font-black' />
        <strong>Add to cart</strong>
      </button>
      </div>
      </div>
  );
}

export default Main;
