import { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import UserImg from "../../assets/images/avatar-icon.png";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/services", display: "Services" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { user, role, dispatch } = useAuth();

  // ✅ Logout handler
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    toast.info("Logged out successfully!");
    navigate("/login");
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-medium">
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 border-b-2 border-indigo-600 pb-1 transition duration-300"
                  : "text-gray-700 hover:text-indigo-500 transition duration-300"
              }
            >
              {item.display}
            </NavLink>
          ))}
        </nav>

        {/* Right Side (Avatar / Username / Login) */}
        <div className="hidden md:flex items-center gap-4 relative">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md hover:shadow-lg border border-gray-200 transition"
              >
                <img
                  src={user.photo || UserImg}
                  alt="User"
                  className="h-9 w-9 rounded-full border border-gray-300 object-cover"
                />
                <span className="text-gray-800 font-semibold capitalize">
                  {user.name || user.username || "User"}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 py-2 animate-fadeInDown">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    👤 My Profile
                  </Link>

                  {(role === "doctor" || role === "admin") && (
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      ⚙️ Dashboard
                    </Link>
                  )}

                  <button
                    onClick={() => {
                      handleLogout();
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:brightness-110 transition">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center md:hidden gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-gray-700 hover:text-indigo-600 transition"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#f0f4ff] to-[#e6f7ff] px-6 py-6 space-y-6 shadow-lg animate-fadeInDown">
          <nav className="flex flex-col gap-6 text-lg font-medium">
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 border-l-4 border-indigo-600 pl-4"
                    : "text-gray-700 hover:text-indigo-500"
                }
              >
                {item.display}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-between mt-6">
            {user ? (
              <div className="flex flex-col items-end">
                <span className="text-gray-800 font-semibold capitalize mb-2">
                  {user.name || user.username || "User"}
                </span>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                aria-label="Login page"
              >
                <button className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:brightness-110 transition">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.3s ease forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
