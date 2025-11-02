import React, { useState } from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "../Feedback";
import SidePanel from "./SidePanel";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");

  const timeSlots = [
    { day: "Sunday", time: "4:00 PM - 9:30 PM" },
    { day: "Tuesday", time: "4:00 PM - 9:30 PM" },
    { day: "Wednesday", time: "4:00 PM - 9:30 PM" },
  ];

  const handleBook = () => {
    alert("Appointment booked!");
  };

  return (
    <section className="py-24 px-5 md:px-10 lg:px-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Column: Doctor Info + Tabs */}
        <div className="flex-1 bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Doctor Info */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8">
            <figure className="flex-shrink-0">
              <img
                src={doctorImg}
                alt="Doctor"
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-blue-100 shadow-md"
              />
            </figure>

            <div className="flex-1">
              <span className="text-blue-600 font-semibold text-lg">Surgeon</span>
              <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-2">
                Muhibur Rahman
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <img src={starIcon} alt="Rating" className="w-5 h-5" />
                <span className="text-gray-600">(272 reviews)</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Dr. Muhibur Rahman is a highly experienced surgeon specializing in
                complex procedures with compassionate patient care and a commitment
                to excellence.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t border-gray-200 flex justify-center mt-6">
            <button
              onClick={() => setTab("about")}
              className={`px-6 py-3 font-semibold transition-colors ${
                tab === "about"
                  ? "border-b-4 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setTab("feedback")}
              className={`px-6 py-3 font-semibold transition-colors ${
                tab === "feedback"
                  ? "border-b-4 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Feedback
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8">{tab === "about" ? <DoctorAbout /> : <Feedback />}</div>
        </div>

        {/* Right Column: Side Panel */}
        <div className="flex-shrink-0 w-full lg:w-96">
          <SidePanel ticketPrice="500 BDT" timeSlots={timeSlots} onBook={handleBook} />
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
