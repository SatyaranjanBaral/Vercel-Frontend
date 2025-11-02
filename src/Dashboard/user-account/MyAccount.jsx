// src/Dashboard/user-account/MyAccount.jsx
import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import defaultUserImg from "../../assets/images/doctor-img01.png";
import { AuthContext } from "../../context/AuthContext";
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";



const MyAccount = () => {
  const { dispatch } = useContext(AuthContext);
  const [tab, setTab] = useState("bookings");

  // ✅ Fetch logged-in user data
  const { data: user, loading, error } = useFetchData(`${BASE_URL}/users/profile/me`);

  // ✅ Handle logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-5xl border border-gray-100 flex flex-col md:flex-row gap-6 transition-all duration-300 hover:shadow-2xl">
        
        {/* LEFT SECTION - Profile Summary */}
        <div className="md:w-1/3 flex flex-col items-center text-center border-r border-gray-200 pr-4">
          <figure className="flex justify-center mb-4">
            <img
              src={user?.photo || defaultUserImg}
              alt={user?.name || "User"}
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md hover:scale-105 transition-transform duration-300 object-cover"
            />
          </figure>

          <div className="space-y-1">
            <h3 className="text-2xl font-semibold text-gray-800">
              {user?.name || "User"}
            </h3>
            <p className="text-gray-600">{user?.email || "example@mail.com"}</p>
            <p className="text-gray-700">
              Blood Type:{" "}
              <span className="font-semibold text-red-500">
                {user?.bloodType || "N/A"}
              </span>
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 w-full px-6">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 rounded-lg shadow hover:bg-red-600 transition"
            >
              Logout
            </button>
            <button className="bg-gray-200 text-gray-800 py-2 rounded-lg shadow hover:bg-gray-300 transition">
              Delete Account
            </button>
          </div>
        </div>

        {/* RIGHT SECTION - Tabs & Content */}
        <div className="md:w-2/3 flex flex-col justify-start">
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setTab("bookings")}
              className={`px-5 py-2 rounded-lg font-medium transition-all ${
                tab === "bookings"
                  ? "bg-blue-500 text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              My Bookings
            </button>

            <button
              onClick={() => setTab("settings")}
              className={`px-5 py-2 rounded-lg font-medium transition-all ${
                tab === "settings"
                  ? "bg-blue-500 text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Profile Settings
            </button>
          </div>

          <div className="relative bg-gray-50 rounded-xl p-6 shadow-inner border border-gray-100 overflow-hidden min-h-[240px]">
            {loading && <p className="text-center text-gray-500">Loading profile...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <AnimatePresence mode="wait">
              {!loading && !error && tab === "bookings" && (
                <motion.div
                  key="bookings"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <MyBookings user={user} />
                </motion.div>
              )}

              {!loading && !error && tab === "settings" && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <Profile user={user} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
