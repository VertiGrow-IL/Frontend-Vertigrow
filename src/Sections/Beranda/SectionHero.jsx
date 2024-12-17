import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Hero from "../../assets/Vertikultur.png";

export default function SectionHero() {
  const navigate = useNavigate(); // Inisialisasi navigator

  const handleNavigate = () => {
    navigate("/masuk"); // Arahkan ke halaman masuk
  };

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center py-10 gap-10 mt-40 px-36">
      {/* Kalimat Hero */}
      <div className="flex flex-col gap-6 lg:text-left">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-[#387F39]">
          Inovasi Pertanian Dimulai di Sini!
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-neutral-800">
          Vertigrow adalah langkah awal menuju pertanian modern dengan metode 
          <strong> Vertikultur</strong>. Temukan solusi inovatif untuk meningkatkan 
          <strong> produktivitas pertanian</strong>, optimalisasi ruang, dan mendukung keberlanjutan dengan teknologi terkini.
        </p>
        <button
          onClick={handleNavigate} // Tambahkan handler klik
          className="bg-[#387F39] rounded-md hover:bg-green-900 w-40 sm:w-48 px-2 py-2 text-[#F8F8F9] text-sm sm:text-lg"
        >
          Mulai Sekarang!
        </button>
      </div>

      {/* Gambar */}
      <img
        src={Hero}
        alt="gambar vertigrow"
        className="w-full lg:w-1/2 rounded-xl"
      />
    </section>
  );
}
