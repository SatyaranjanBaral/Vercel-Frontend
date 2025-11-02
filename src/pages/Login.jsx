import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { BASE_URL } from "../config";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setLoading(false);

      if (!res.ok) {
        // show toast error from server message (if any)
        toast.error(result.message || "Invalid email or password");
        return;
      }

      // Extract token and user from server response (adapt if server uses different keys)
      const token = result.token || result.accessToken || result.data?.token || null;
      const user = result.data || result.user || null;
      const role = user?.role || result.role || "patient";

      if (!token || !user) {
        toast.error("Login response missing token/user. Check server response.");
        return;
      }

      // Save to context
      dispatch({ type: "LOGIN_SUCCESS", payload: { user, token, role } });

      // Persist to localStorage (AuthContext will keep in sync as well)
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", role);

      // success toast
      toast.success("Login successful!");

      // navigate to profile or home
      navigate("/users/profile/me");
    } catch (err) {
      console.error("Login Error:", err);
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Welcome Back 👋 <br />
          <span className="text-blue-600">Login to your account</span>
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? "bg-blue-400" : "bg-blue-600"} text-white py-2 rounded-lg`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <p className="text-center text-gray-600 text-sm">
            Don't have an account? <Link to="/register" className="text-blue-600">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
