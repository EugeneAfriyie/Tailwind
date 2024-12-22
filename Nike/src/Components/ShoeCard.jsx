import React from 'react'

const ShoeCard = ({imgUrl,bigshoeimg,changeShoeImg}) => {

    const handleClick =()=>{
        if (bigshoeimg !== imgUrl.bigShoe){
            changeShoeImg(imgUrl)
        }

        console.log([bigshoeimg,imgUrl])
    }
  return (
    <div className={`border-2 rounded-xl
    ${bigshoeimg === imgUrl.bigShoe ? 'border-coral-red'  : 'border-transparent cursor-pointer max-sm:flex-1' }
    `} onClick={handleClick}>

        <div className="flex justify-center items-center bg-card bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgUrl.thumbnail} alt="shoe-collection" 
            width={120}
            height={103}
            className='object-contain'
            />
        </div>
    </div>
  )
}

export default ShoeCard