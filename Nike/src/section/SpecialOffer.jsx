import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container '>
       <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className='object-contain' />
       </div>

       <div className="flex flex-1 flex-col">

        <h2 className=' font-palanquin text-4xl capitalize lg:max-w-lg font-bold'> 

          <span className='text-coral-red '>
             Special  </span>
         Offer
        </h2>

        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a dhopping jounery that redefines luxury and style, with our exclusive collection of shoes that are designed to make you stand out from the crowd.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilitie designed to fulfill your unique desires, surpasing the loftiest of expectations.Your journey to the perfect pair of shoes starts here.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">

        <Button label={'Shop Now'}  iconUrl={arrowRight}/>
       
        <Button
          label={'Learn More'}
          iconUrl={arrowRight} 
          backgroundColor='bg-white'
          borderColor='border-slate-gray'
          textColor='text-slate-gray'
           
           />
        </div>
      </div>


    </section >
  )
}

export default SpecialOffer