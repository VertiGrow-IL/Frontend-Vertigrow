import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function SectionTentang() {
  const navigate = useNavigate(); // Inisialisasi navigator

  const handleNavigate = () => {
    navigate("/tentang-kami"); // Arahkan ke halaman tentang
  };

  return (
    <section className="bg-gradient-to-b from-green-100 to-neutral-100 w-full px-6 lg:px-0 mb-20">
      <div className="container mx-auto flex flex-col items-center py-10 lg:py-16 gap-8 lg:gap-12 text-center lg:text-left">
        
        {/* Heading */}
        <div className="relative">
          <h3 className="text-3xl sm:text-4xl font-bold text-[#387F39]">
            Apa itu <span className="underline decoration-[#6FCF97]">Vertigrow</span>?
          </h3>
          <div className="absolute w-16 h-1 bg-[#6FCF97] -bottom-2 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0"></div>
        </div>

        {/* Deskripsi */}
        <p className="text-lg sm:text-xl lg:text-2xl text-neutral-800 leading-relaxed max-w-4xl">
          <span className="font-bold text-[#387F39]">Vertigrow</span> adalah platform inovatif yang mengajak masyarakat urban, 
          termasuk Anda yang memiliki lahan terbatas, untuk mengembangkan hobi berkebun dengan teknik <span className="italic text-[#387F39]">vertikultur</span>. 
          Kami hadir dengan <span className="bg-[#6FCF97] px-1 text-white rounded">solusi praktis</span> dan inspiratif 
          bagi Anda yang ingin menanam sendiri di rumah sekaligus mendukung pertanian yang ramah lingkungan dan berkelanjutan.
        </p>

        {/* List Keunggulan */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-[#387F39]">
          <li className="flex items-center gap-3">
            <span className="w-4 h-4 bg-[#387F39] rounded-full"></span>
            Praktis untuk lahan kecil
          </li>
          <li className="flex items-center gap-3">
            <span className="w-4 h-4 bg-[#387F39] rounded-full"></span>
            Teknologi ramah lingkungan
          </li>
          <li className="flex items-center gap-3">
            <span className="w-4 h-4 bg-[#387F39] rounded-full"></span>
            Mendukung pertanian berkelanjutan
          </li>
          <li className="flex items-center gap-3">
            <span className="w-4 h-4 bg-[#387F39] rounded-full"></span>
            Mudah diterapkan di rumah
          </li>
          <li className="flex items-center gap-3">
            <span className="w-4 h-4 bg-[#387F39] rounded-full"></span>
            Solusi modern untuk urban
          </li>
          <li className="flex items-center gap-3">
            <span className="w-4 h-4 bg-[#387F39] rounded-full"></span>
            Meningkatkan hasil panen
          </li>
        </ul>

        {/* Tombol */}
        <div className="flex justify-center lg:justify-start mt-6">
          <button
            onClick={handleNavigate}
            className="bg-[#387F39] hover:bg-green-900 text-white font-semibold rounded-full px-6 py-3 text-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            Pelajari Selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
}
