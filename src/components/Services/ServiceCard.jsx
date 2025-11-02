import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({ item ,index}) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div
      className={`rounded-xl p-6 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out ${bgColor} ${textColor}`}
    >
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-900 dark:text-gray-900 font-[400] mb-4">{desc}</p>

      {/* Rounded arrow icon */}
      <div className='flex item-center justify-between mt-[30px]'>
        <Link
          to="/doctors"
          className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          <BsArrowRight className="text-lg" />
        </Link>
        <span  className='w-[34px] h-[34px] flex item-center justify-center  text-[18px] leading-[30px] font-[600]'  style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius:"6px 0 0 6px"
        }}>
            {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
