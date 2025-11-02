import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // You can replace this with API call or context/state update
    console.log("Rating:", rating);
    console.log("Review:", reviewText);
    alert("Thank you for your feedback!");
    setRating(0);
    setHover(0);
    setReviewText("");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmitReview}>
      {/* Rating Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          How would you rate the overall experience?*
        </h3>

        <div className="flex gap-2">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <button
                key={starValue}
                type="button"
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
                onDoubleClick={() => {
                  setRating(0);
                  setHover(0);
                }}
                className="focus:outline-none"
              >
                <AiFillStar
                  size={28}
                  className={`transition-colors ${
                    starValue <= (hover || rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback Textarea */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Share your feedback or suggestions*
        </h3>
        <textarea
          rows="5"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your message..."
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
