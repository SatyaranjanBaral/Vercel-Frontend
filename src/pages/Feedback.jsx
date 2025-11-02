import React, { useState } from "react";
import avatar from "../assets/images/avatar-icon.png";
import { formateDate } from "../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./Doctors/FeedbackForm";

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h4 className="text-xl font-semibold text-gray-800">
          All Reviews <span className="text-blue-600">(272)</span>
        </h4>
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        {/* Single Feedback */}
        <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <figure className="w-12 h-12">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </figure>
          <div className="flex-1">
            <h5 className="text-gray-800 font-semibold">Ali Ahmed</h5>
            <p className="text-yellow-600 text-sm">{formateDate("2025-02-14")}</p>
            <p className="text-gray-600 mt-1">Good services, highly recommended</p>
          </div>
        </div>
      </div>

      {/* Star Ratings */}
      <div className="flex gap-1">
        {[...Array(5).keys()].map((_, index) => (
          <AiFillStar key={index} color="#0067FF" />
        ))}
      </div>

      {/* Feedback Form Toggle */}
      <div>
        {!showFeedbackForm && (
          <button
            onClick={() => setShowFeedbackForm(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Give Feedback
          </button>
        )}

        {showFeedbackForm && <FeedbackForm />}
      </div>
    </div>
  );
};

export default Feedback;
