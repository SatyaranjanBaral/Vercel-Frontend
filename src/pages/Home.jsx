import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

// Image Imports
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";

// Components
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp { 0%{opacity:0;transform:translateY(30px)}100%{opacity:1;transform:translateY(0)} }
        @keyframes fadeInLeft { 0%{opacity:0;transform:translateX(-30px)}100%{opacity:1;transform:translateX(0)} }
        @keyframes fadeInRight { 0%{opacity:0;transform:translateX(30px)}100%{opacity:1;transform:translateX(0)} }
        .animate-fadeInUp{animation:fadeInUp 0.7s ease forwards}
        .animate-fadeInLeft{animation:fadeInLeft 0.7s ease forwards}
        .animate-fadeInRight{animation:fadeInRight 0.7s ease forwards}
      `}</style>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb] py-16 px-4 md:px-8 lg:px-16 animate-fadeInUp">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="flex-1 space-y-6 animate-fadeInLeft">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              We help patients live a healthy, longer life.
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Get the best healthcare experience from trusted doctors, modern
              clinics, and world-class facilities. Your health is our top
              priority.
            </p>
            <button className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Request an Appointment
            </button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "30+", label: "Years of Experience" },
                { value: "15+", label: "Clinic Locations" },
                { value: "100%", label: "Patient Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <h2 className="text-3xl font-bold text-indigo-600">
                    {stat.value}
                  </h2>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="flex-1 grid grid-cols-2 gap-4 items-center animate-fadeInRight">
            <img
              src={heroImg01}
              alt="Hero 1"
              className="rounded-lg w-full h-auto hover:scale-105 transition-transform duration-300"
            />
            <div className="space-y-4">
              <img
                src={heroImg02}
                alt="Hero 2"
                className="rounded-lg w-full h-auto hover:scale-105 transition-transform duration-300"
              />
              <img
                src={heroImg03}
                alt="Hero 3"
                className="rounded-lg w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES SECTION ---------------- */}
      <section className="py-20 bg-white px-4 md:px-8 lg:px-16 animate-fadeInUp">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Providing the Best Medical Services
          </h2>
          <p className="text-gray-600 text-lg">
            World-class care for everyone. Our health system offers unmatched,
            expert healthcare in every field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Find a Doctor",
              icon: icon01,
              desc: "Search and connect with top specialists easily.",
              link: "/doctors",
              color: "from-blue-100 to-blue-50",
            },
            {
              title: "Find a Location",
              icon: icon02,
              desc: "Locate nearby clinics with trusted facilities.",
              link: "/locations",
              color: "from-green-100 to-green-50",
            },
            {
              title: "Book Appointment",
              icon: icon03,
              desc: "Schedule your visits conveniently online.",
              link: "/appointments",
              color: "from-pink-100 to-pink-50",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${service.color} p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition duration-300`}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="h-16 w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">{service.desc}</p>
              <div className="text-center">
                <Link
                  to={service.link}
                  className="inline-flex items-center text-indigo-600 font-medium hover:underline"
                >
                  Learn more <BsArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <About />

      {/* ---------------- OUR MEDICAL SERVICES ---------------- */}
      <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-16 animate-fadeInUp">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Medical Services
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our healthcare system offers expert care across multiple
            specialties. From diagnostics to treatment — we’ve got you covered.
          </p>
        </div>
        <ServiceList />
      </section>

      {/* ---------------- FEATURE SECTION ---------------- */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 animate-fadeInUp">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left content */}
          <div className="space-y-6 animate-fadeInLeft">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Get virtual treatment <br /> anytime.
            </h2>

            <ul className="space-y-4 text-gray-600 list-disc list-inside">
              <li>Schedule appointments directly</li>
              <li>Search for your physician and connect easily</li>
              <li>Access care with our online scheduling tool</li>
            </ul>

            <button className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition font-semibold shadow">
              Learn More
            </button>
          </div>

          {/* Right image + floating card */}
          <div className="relative animate-fadeInRight">
            <img
              src={featureImg}
              alt="Virtual Treatment"
              className="w-full rounded-lg shadow-md"
            />
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-lg w-64">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-500 text-sm">Tue, 24</p>
                  <p className="text-gray-800 font-semibold text-lg">10:00 AM</p>
                </div>
                <span className="bg-blue-100 p-2 rounded-full">
                  <img src={videoIcon} alt="Video" className="w-6 h-6" />
                </span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={avatarIcon}
                  alt="Doctor"
                  className="w-10 h-10 rounded-full border border-gray-300"
                />
                <h4 className="text-gray-800 font-medium">Wayne Collins</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- DOCTORS SECTION ---------------- */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white animate-fadeInUp">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Great Doctors
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Meet our experienced and compassionate doctors who provide
            world-class care and attention to every patient.
          </p>
        </div>
        <DoctorList />
      </section>

      {/* ---------------- FAQ SECTION ---------------- */}
      <section className="py-16 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12">
          <div className="md:w-1/2 animate-fadeInLeft">
            <img src={faqImg} alt="FAQ" className="rounded-xl shadow-md" />
          </div>
          <div className="md:w-1/2 animate-fadeInRight">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Most Questions by Our Patients
            </h2>
            <FaqList />
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIAL SECTION ---------------- */}
      <section className="py-16 bg-gray-50 animate-fadeInUp">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg mb-12">
           
          </p>
         
          <Testimonial />
        </div>
      </section>

      {/* ---------------- LOCATION SECTION ---------------- */}
      <section className="py-16 bg-white px-6 animate-fadeInUp">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Our Locations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit any of our branches located across the country for world-class
            healthcare and expert doctors.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              city: "Mumbai",
              address: "Bandra West, Near Metro Station",
              color: "from-yellow-100 to-yellow-300",
            },
            {
              city: "Delhi",
              address: "Connaught Place, Central Delhi",
              color: "from-pink-100 to-pink-300",
            },
            {
              city: "Bangalore",
              address: "Indiranagar, Main Road",
              color: "from-green-100 to-green-300",
            },
          ].map((loc, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl shadow-md bg-gradient-to-r ${loc.color} text-center hover:scale-105 transition`}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {loc.city}
              </h3>
              <p className="text-gray-700">{loc.address}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
