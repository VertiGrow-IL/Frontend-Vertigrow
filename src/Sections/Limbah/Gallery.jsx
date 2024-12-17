import React, { useState } from "react";
import { Link } from "react-router-dom";
import Biochar from '../../assets/EcoLimbah/limbah/biochar.jpg'
import Bokashi from '../../assets/EcoLimbah/limbah/bokasih.jpg'
import Kompos from '../../assets/EcoLimbah/limbah/kompos.jpeg'
import KomposDaun from '../../assets/EcoLimbah/limbah/kompos-daun.jpeg'
import PakanTernak from '../../assets/EcoLimbah/limbah/pakan-ternak.jpg'
import PupukCair from '../../assets/EcoLimbah/limbah/pupuk-cair.jpg'
import PupukHijau from '../../assets/EcoLimbah/limbah/Pupuk-Hijau.jpg'
import UpcyclingWadah from '../../assets/EcoLimbah/limbah/upcycling-wadah.jpeg'


const Gallery = () => {
  const wastes = [
    {
      image: Kompos,
      name: "Pupuk Kompos",
      description: "Panduan mendaur ulang limbah plastik menjadi berguna.",
      link: "/pupuk-kompos",
    },
    {
      image: Bokashi,
      name: "Fermentasi Bokashi",
      description: "Cara membuat pupuk kompos dari limbah organik.",
      link: "/fermentasi-bokashi",
    },
    {
      image: UpcyclingWadah,
      name: "Upcycling Wadah",
      description: "Tips mendaur ulang kertas untuk keperluan sehari-hari.",
      link: "/upcycling-wadah",
    },
    {
      image: PakanTernak,
      name: "Pakan Ternak",
      description: "Mengelola limbah elektronik secara aman.",
      link: "/pakan-ternak",
    },
    {
      image: PupukCair,
      name: "Pupuk Cair",
      description: "Panduan mendaur ulang limbah kaca dengan benar.",
      link: "/pupuk-cair",
    },
    {
      image: KomposDaun,
      name: "Kompos Daun",
      description: "Mengolah daun kering menjadi kompos yang bermanfaat.",
      link: "/kompos-daun",
    },
    {
      image: Biochar,
      name: "Biochar Organik",
      description: "Memanfaatkan sisa batang tanaman untuk membuat arang aktif.",
      link: "/biochar-organik",
    },
    {
      image: PupukHijau,
      name: "Pupuk Hijau",
      description: "Mengolah limbah tanaman menjadi pupuk hijau untuk pertanian.",
      link: "/pupuk-hijau",
    },
  ];  

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWastes, setFilteredWastes] = useState(wastes);

  const handleSearch = () => {
    const results = wastes.filter((waste) =>
      waste.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (results.length > 0) {
      setFilteredWastes(results);
    } else {
      alert("Limbah tidak ditemukan!");
      setFilteredWastes(wastes); // Menampilkan daftar limbah kembali
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="bg-[#F9F9F9] py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Cari Limbah Yang Akan Dibuat</h2>
          <div className="flex justify-center gap-2">
            <input
              type="text"
              placeholder="Mau Daur Ulang Apa?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-3/4 max-w-md border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Cari
            </button>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-10 px-4 mb-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {filteredWastes.map((waste, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={waste.image}
                alt={waste.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 h-80 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex flex-col justify-center items-center">
                <h3 className="font-bold text-lg">{waste.name}</h3>
                <p className="text-sm text-center">{waste.description}</p>
                <Link to={waste.link}>
                  <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Pelajari
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
