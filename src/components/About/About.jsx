import React from 'react';
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Images */}
        <div className="relative flex-1">
          <img
            src={aboutImg}
            alt="Main About"
            className="rounded-lg w-full h-auto shadow-lg"
          />
          <img
            src={aboutCardImg}
            alt="Card"
            className="absolute bottom-[-30px] right-[-30px] w-40 md:w-52 rounded-xl shadow-xl border-4 border-white"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Proud to be one of the Nation’s Best
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            For 30 consecutive years, U.S. News & World Report has recognized us as one of the top public hospitals in the nation — and #1 in Texas.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We take pride in providing compassionate care, cutting-edge medical research, and a team of professionals dedicated to improving lives. Our legacy is built on trust, excellence, and innovation.
          </p>
          <Link to="/">
            <button className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
