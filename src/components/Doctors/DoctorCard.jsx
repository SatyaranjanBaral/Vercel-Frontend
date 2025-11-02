import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import startIcon from '../../assets/images/Star.png';

const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialization,
    totalPatient,
    hospital,
    bgColor = 'bg-blue-50', // optional background color for variety
  } = doctor;

  return (
    <div
      className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 w-full max-w-sm ${bgColor}`}
    >
      {/* Doctor Image */}
      <div className="flex justify-center mb-5">
        <div className="rounded-xl overflow-hidden bg-white shadow-md w-[220px] h-[220px] flex justify-center items-center">
          <img
            src={photo}
            alt={name}
            className="object-cover w-full h-full hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      {/* Doctor Info */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>
        <p className="text-sm text-blue-600 font-medium mb-3">{specialization}</p>

        {/* Rating */}
        <div className="flex justify-center items-center gap-1 mb-4 text-gray-700">
          <img src={startIcon} alt="star" className="w-4 h-4" />
          <span className="font-medium">{avgRating}</span>
          <span className="text-gray-400 text-sm">({totalRating})</span>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-4" />

        {/* Bottom Info */}
        <div className="flex items-center justify-between">
          <div className="text-left">
            <h3 className="text-lg font-semibold text-indigo-600">+{totalPatient}</h3>
            <p className="text-sm text-gray-500">At {hospital}</p>
          </div>

          {/* Arrow Button */}
          <Link
            to="/doctors"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            <BsArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
