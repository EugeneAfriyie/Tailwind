import React from 'react'
import Button from '../Components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us'
    className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>

      <div className="flex flex-1 flex-col">

        <h2 className=' font-palanquin text-4xl capitalize lg:max-w-lg font-bold'> 

            We Provide You  
          <span className='text-coral-red '> Super  </span>

           <span className='text-coral-red '>Quality </span> Shoes
        </h2>

        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style , our maticulously crafted shoes are designed to last,prociding you with the best quality,innovation and comfort.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence is what makes us stand out from the rest.
        </p>
        <div className="mt-11">

        <Button label={'View Details'} />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} 
        className='object-contain' />
      </div>
      
    </section>
  )
}

export default SuperQuality