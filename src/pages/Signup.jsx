import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../config";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
    gender: "",
    role: "patient",
  });

  const handleInputChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleFileInputChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreviewURL(URL.createObjectURL(file));
    try {
      const uploadRes = await uploadImageToCloudinary(file);
      const url = uploadRes.secure_url || uploadRes.url;
      setFormData((p) => ({ ...p, photo: url }));
    } catch (err) {
      console.error("Cloudinary upload failed:", err);
      toast.error("Image upload failed. Try again.");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { name, email, password, role } = formData;
      if (!name || !email || !password || !role) {
        toast.error("Please fill required fields.");
        setLoading(false);
        return;
      }

      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setLoading(false);

      if (!res.ok) {
        toast.error(result.message || "Signup failed");
        return;
      }

      toast.success("Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      setLoading(false);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-5">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 bg-gradient-to-b from-blue-100 to-blue-50 flex items-center justify-center p-6">
          <img src={signupImg} alt="Signup" className="max-w-xs md:max-w-sm" />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create an <span className="text-blue-600">Account</span>
          </h3>

          <form onSubmit={submitHandler} className="space-y-5">
            <input name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Full Name" required className="w-full border rounded-lg px-4 py-2" />
            <input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Email" required className="w-full border rounded-lg px-4 py-2" />
            <input name="password" value={formData.password} onChange={handleInputChange} type="password" placeholder="Password" required className="w-full border rounded-lg px-4 py-2" />

            <div className="flex flex-col md:flex-row gap-4">
              <select name="role" value={formData.role} onChange={handleInputChange} className="border rounded-lg px-3 py-2">
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>

              <select name="gender" value={formData.gender} onChange={handleInputChange} className="border rounded-lg px-3 py-2">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex items-center gap-5 mt-4">
              <figure className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-300">
                <img src={previewURL || formData.photo || avatar} alt="avatar" className="w-full h-full object-cover" />
              </figure>
              <div>
                <input id="photo" type="file" accept=".jpg,.jpeg,.png" onChange={handleFileInputChange} className="hidden" />
                <label htmlFor="photo" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg">Upload Photo</label>
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold">
              {loading ? "Creating account..." : "Sign Up"}
            </button>

            <p className="text-center text-gray-600 text-sm pt-3">
              Already have an account? <Link to="/login" className="text-blue-600 font-medium">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
