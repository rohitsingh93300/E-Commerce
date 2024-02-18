import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const Star = ({ stars, reviews }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return <span key={index}>
            {
                stars > index + 1 ? <FaStar className='text-yellow-400' /> : stars > number ? <FaStarHalfAlt className='text-yellow-400' /> : <FaRegStar className='text-yellow-400' />
            }
        </span>
    });
    return (
        <div className='flex items-center gap-2'>
            <div className='flex'>
                {ratingStar}

            </div>
            <p>({reviews} customer reviews)</p>
        </div>
    )
}

export default Star
