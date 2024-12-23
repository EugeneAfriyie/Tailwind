import React from 'react'
import { reviews } from '../Constants'
import ReviewCard from '../Components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our?
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto max-w-lg text-center">
        Hear genuine stories from our customers about their experiences with our products and services.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
           key={review.customerName}

           imgURL={review.imgURL}
           customerName={review.customerName}
           rating={review.rating}
           feedback={review.feedback}
           
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews