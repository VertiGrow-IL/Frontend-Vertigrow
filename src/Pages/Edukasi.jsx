import React, { useEffect } from "react";
import NavbarUser from "../Components/NavbarUser"
import Footer from "../Components/Footer"
import Hero from "../Sections/Edukasi/Hero"; // Sesuaikan path jika folder bernama `Section`
import Gallery from "../Sections/Edukasi/Gallery"; // Sesuaikan path
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Edukasi() {
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:4000/auth/edukasi", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status !== 201) {
        navigate("/masuk");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <NavbarUser />
      <Hero />
      <Gallery />
      <Footer />
    </>
  );
}
