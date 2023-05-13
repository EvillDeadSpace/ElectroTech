import React from 'react'

const categoryGrid = ({category}) => {
  const {title, imgURL} = category;


  return (
   <div
            
            className="h-80 flex-1  mt-10  flex items-center justify-center border-4 border-purple-400 hover:cursor-pointer overflow-hidden grow   rounded-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            style={{ backgroundImage: `url(${imgURL})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
          >
            
            <div className="bg-purple-400 bg-opacity-50  p-5   hover:scale-110 duration-500  ">
              <h1 className=" text-center  py-2     font-semibold text-xl">{title}</h1>
              <p className=" text-center font-light font-semibold text-sm">SHOP NOW</p>
            </div>
          </div>
  )
}

export default categoryGrid