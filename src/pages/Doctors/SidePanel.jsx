import React from "react";

const SidePanel = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-6 w-full max-w-sm">
      {/* Ticket Price */}
      <div className="flex justify-between items-center">
        <p className="text-gray-700 font-semibold">Ticket Price</p>
        <span className="text-blue-600 font-bold text-lg">500 BDT</span>
      </div>

      {/* Available Time Slots */}
      <div>
        <p className="text-gray-700 font-semibold mb-3">Available Time Slots:</p>
        <ul className="space-y-2">
          <li className="flex justify-between bg-gray-50 p-3 rounded-xl border border-gray-200">
            <p className="font-medium text-gray-800">Sunday</p>
            <p className="text-gray-600">4:00 PM - 9:30 PM</p>
          </li>
          <li className="flex justify-between bg-gray-50 p-3 rounded-xl border border-gray-200">
            <p className="font-medium text-gray-800">Tuesday</p>
            <p className="text-gray-600">4:00 PM - 9:30 PM</p>
          </li>
          <li className="flex justify-between bg-gray-50 p-3 rounded-xl border border-gray-200">
            <p className="font-medium text-gray-800">Wednesday</p>
            <p className="text-gray-600">4:00 PM - 9:30 PM</p>
          </li>
        </ul>
      </div>

      {/* Book Appointment Button */}
      <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
