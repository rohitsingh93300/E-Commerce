import React, { useState } from 'react'

const MyImages = ({ image = [{url:""}] }) => {
    const [mainImage, setMainImage] = useState(image[0]);
    console.log(image)
    return (
        <div className='grid place-items-center'>
            <div className='container gap-2 space-y-2 p-2 sm:p-0 flex flex-col items-center justify-center  '>
               <div className='sm:w-[425px] w-[82%]  '>
                <img src={mainImage.url} alt="" />
               </div>
               <div className='sm:gap-2 flex justify-center gap-1 sm:w-[100px] w-[20%]'>
                {
                    image.map((data,index)=>{
                        return (
                            <img src={data.url} alt="" key={index}
                            onClick={()=>setMainImage(data)}
                            />
                        )
                    })
                }
               </div>
            </div>
        </div>
    )
}

export default MyImages
