import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { HiStar } from 'react-icons/hi';
import patientAvatar from '../../assets/images/patient-avatar.png';

const testimonials = [
  {
    name: 'Muhibur',
    avatar: patientAvatar,
    rating: 5,
    feedback: 'Great experience! The doctor was very professional and friendly.',
  },
  {
    name: 'Ayesha',
    avatar: patientAvatar,
    rating: 4,
    feedback: 'Clean clinic and quick service. Would recommend to others.',
  },
  {
    name: 'Rafiq',
    avatar: patientAvatar,
    rating: 5,
    feedback: 'Amazing service and care. I felt really comfortable here.',
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10">
          What Our Patients Say
        </h2>
         <p className="text-gray-600 text-lg mb-12">
                    Real stories from our patients who trusted us with their care.
                  </p>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg hover:shadow-2xl rounded-xl p-6 h-full flex flex-col transition-transform duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'forwards',
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-blue-700">{item.name}</h4>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <HiStar
                          key={i}
                          className="text-xl cursor-pointer hover:text-blue-500 transition-colors"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-blue-800 leading-relaxed mt-auto">{item.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
