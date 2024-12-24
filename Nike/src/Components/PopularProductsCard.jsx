import React from 'react'
import { star } from '../assets/icons'

const PopularProductsCard = ({imgURL, name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full justify-center items-center'>
        <img src={imgURL} alt={name} className='w-[580px] h-[280px]' />

        <div className="mt-4 flex justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} />

            <p className="font-montserrat text-xl leading-normal to-slate-gray">(4.5)</p>
        </div>

        <h3 className='mt-0 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-0 font-semibold text-2xl leading-normal text-coral-red'>{price}</p>
    </div>

  )
}

export default PopularProductsCard