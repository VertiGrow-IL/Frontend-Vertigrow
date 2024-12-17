import React, { useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const wastes = [
    {
      image: "https://cdn-2.tstatic.net/batam/foto/bank/images/Membuat-pupuk-kompos.jpg",
      name: "Pupuk Kompos",
      description: "Panduan mendaur ulang limbah plastik menjadi berguna.",
      link: "/pupuk-kompos",
    },
    {
      image: "https://asset.kompas.com/crops/yDXIhlCXmF-_uzYrU3nYWXtYn8U=/43x126:1243x926/750x500/data/photo/2022/02/25/62186eb1c7fc4.jpg",
      name: "Fermentasi Bokashi",
      description: "Cara membuat pupuk kompos dari limbah organik.",
      link: "/fermentasi-bokashi",
    },
    {
      image: "https://www.wastemanaged.co.uk/wp-content/uploads/2023/06/Plastic-Recycling.jpg",
      name: "Upcycling Wadah",
      description: "Tips mendaur ulang kertas untuk keperluan sehari-hari.",
      link: "/upcycling-wadah",
    },
    {
      image: "https://www.visaoms.com.br/wp-content/uploads/2023/03/1-713x375.jpg",
      name: "Pakan Ternak",
      description: "Mengelola limbah elektronik secara aman.",
      link: "/pakan-ternak",
    },
    {
      image: "https://bibitbunga.com/wp-content/uploads/2017/03/tahap-membuat-pupuk-organik-cair.jpg",
      name: "Pupuk Cair",
      description: "Panduan mendaur ulang limbah kaca dengan benar.",
      link: "/pupuk-cair",
    },
    {
      image: "https://wahananews.co/photo/berita/dir022023/mudah-dan-murah-begini-cara-membuat-kompos-daun-kering_QDXjW470A4.jpeg",
      name: "Kompos Daun",
      description: "Mengolah daun kering menjadi kompos yang bermanfaat.",
      link: "/kompos-daun",
    },
    {
      image: "https://agroadvance.com.br/wp-content/uploads/2023/04/pacific-biochar-140.jpg",
      name: "Biochar Organik",
      description: "Memanfaatkan sisa batang tanaman untuk membuat arang aktif.",
      link: "/biochar-organik",
    },
    {
      image: "https://paktanidigital.com/artikel/wp-content/uploads/2019/06/Pupuk-Hijau.jpg",
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
