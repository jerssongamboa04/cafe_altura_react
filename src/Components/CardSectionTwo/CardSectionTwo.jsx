import React from 'react'

const CardSectionTwo = ({ img, title, description }) => {

  return (
   
        <div className=" gap-4 p-8 flex flex-col justify-center items-center 
        bg-[#f7f5f3] rounded-lg w-[33.3%] m-3 h-[17rem]">
            <div className='my-2 bg-[#2a5b45] p-1inline-block rounded-[40px] justify-center text-center'>
                <img src={img} alt="icon" />
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-base">{description}</p>
        </div>
    )  
}

export default CardSectionTwo;