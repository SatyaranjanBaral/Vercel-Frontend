import React, { useState } from "react";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial"; // Make sure this path is correct
import { doctors } from "./../../assets/data/doctors";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter doctors based on search term
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Doctors Section */}
      <section className="py-24 px-5 md:px-10 lg:px-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Find a <span className="text-blue-600">Doctor</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Search and find qualified doctors from our trusted medical team.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16 flex items-center gap-3">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Doctor"
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm"
          />
          <button
            onClick={() => {}}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No doctors found.
            </p>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center max-w-4xl animate-fadeInUp">
        
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
