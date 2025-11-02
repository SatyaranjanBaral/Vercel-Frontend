import React from "react";
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div className="space-y-10">
      {/* About Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-800">
          About of
          <span className="text-blue-600 ml-2">Muhibur Rahman</span>
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Dr. Muhibur Rahman is a highly experienced and dedicated surgeon with
          over 15 years of practice in the medical field. He specializes in
          minimally invasive and complex surgical procedures, combining advanced
          medical techniques with compassionate patient care. Dr. Rahman is
          committed to delivering the highest standard of healthcare, ensuring
          that every patient receives personalized attention and treatment. He
          has been recognized for his expertise, professionalism, and commitment
          to improving patient outcomes through continuous learning and
          innovation.
        </p>
      </div>

      {/* Education Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Education</h3>
        <ul className="space-y-4">
          <li className="bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <span className="text-blue-500 font-medium">
                {formateDate("2008-06-23")} - {formateDate("2012-06-23")}
              </span>
              <p className="text-gray-700 font-semibold">PHD in Surgeon</p>
            </div>
            <p className="text-gray-600">New Apollo Hospital, New York.</p>
          </li>

          <li className="bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <span className="text-blue-500 font-medium">
                {formateDate("2010-04-07")} - {formateDate("2014-04-07")}
              </span>
              <p className="text-gray-700 font-semibold">Specialization in Cardiology</p>
            </div>
            <p className="text-gray-600">New Apollo Hospital, New York.</p>
          </li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Experience</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Experience Item 1 */}
          <div className="flex-1 bg-yellow-200 p-4 rounded-2xl shadow-md border border-yellow-300 hover:bg-yellow-300 transition">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <span className="text-yellow-800 font-medium">
                {formateDate("2010-04-07")} - {formateDate("2014-08-13")}
              </span>
              <p className="text-gray-800 font-semibold">Sr. Surgeon</p>
            </div>
            <p className="text-gray-700">New Apollo Hospital, New York.</p>
          </div>

          {/* Experience Item 2 */}
          <div className="flex-1 bg-yellow-200 p-4 rounded-2xl shadow-md border border-yellow-300 hover:bg-yellow-300 transition">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <span className="text-yellow-800 font-medium">
                {formateDate("2014-09-01")} - {formateDate("2018-05-31")}
              </span>
              <p className="text-gray-800 font-semibold">Chief Surgeon</p>
            </div>
            <p className="text-gray-700">New Apollo Hospital, New York.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAbout;
