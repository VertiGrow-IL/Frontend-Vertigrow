import imageLeft from "../../assets/background1.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

export default function SectionMasuk() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Fungsi untuk toggle password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Validasi input di frontend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi input
    if (!values.email || !values.password) {
      setErrorMessage("Email dan password tidak boleh kosong!");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:4000/auth/masuk",
        values
      );
      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        navigate("/verti-guide"); // Navigasi setelah berhasil login
      }
    } catch (err) {
      console.error(err.response?.data?.message || "Login gagal");
      setErrorMessage(err.response?.data?.message || "Login gagal");
    } finally {
      setLoading(false); // Berhenti loading
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 hidden md:block">
        <img
          src={imageLeft}
          alt="imageLeft"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-100 px-8">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
            Welcome to <span className="text-green-600">VertiGrow</span>
          </h1>

          {/* Pesan Error */}
          {errorMessage && (
            <div className="text-red-600 mb-4 text-center">{errorMessage}</div>
          )}

          {/* Form Login */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="flex items-center border rounded-lg bg-gray-200">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email anda"
                  className="w-full bg-transparent py-2 px-2 text-gray-700 outline-none"
                  onChange={handleChanges}
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Kata Sandi
              </label>
              <div className="flex items-center border rounded-lg bg-gray-200">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  name="password"
                  placeholder="Kata sandi anda"
                  className="w-full bg-transparent py-2 px-2 text-gray-700 outline-none"
                  onChange={handleChanges}
                />
                <span
                  onClick={togglePassword} // Click to toggle password visibility
                  className="cursor-pointer px-3 text-gray-500"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>

            {/* Tombol Masuk */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg text-lg hover:bg-green-700"
              disabled={loading}
            >
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} spin className="mr-2" /> // Loading spinner
              ) : (
                "Masuk"
              )}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Tidak Punya Akun?{" "}
            <a href="/Daftar" className="text-orange-600 font-medium">
              Daftar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
