import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bayam from '../../assets/VertiGuide/Langkah/Panen Bayam.jpg'
import Caisim from '../../assets/VertiGuide/edukasi/caisim.jpg'
import Bawang from '../../assets/VertiGuide/edukasi/daun-bawang.jpeg'
import Kangkung from '../../assets/VertiGuide/edukasi/kangkung.jpg'
import Kucai from '../../assets/VertiGuide/edukasi/kucai.jpg'
import Pakcoy from '../../assets/VertiGuide/edukasi/pakcoy.jpg'
import Seledri from '../../assets/VertiGuide/edukasi/seledri.jpg'
import Selada from '../../assets/VertiGuide/edukasi/selada.jpg'

const Gallery = () => {
  const plants = [
    {
      image: Bayam,
      name: "Bayam",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/bayam",
    },
    {
      image: Caisim,
      name: "Caisim",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/caisim",
    },
    {
      image: Bawang,
      name: "Daun Bawang",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/bawang",
    },
    {
      image: Kangkung,
      name: "Kangkung Darat",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/kangkung",
    },
    {
      image: Pakcoy,
      name: "Pakcoy",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/pakcoy",
    },
    {
      image: Kucai,
      name: "Kucai",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/kucai",
    },
    {
      image: Selada,
      name: "Selada",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/selada",
    },
    {
      image: Seledri,
      name: "Seledri",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/seledri",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlants, setFilteredPlants] = useState(plants);

  const handleSearch = () => {
    const results = plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (results.length > 0) {
      setFilteredPlants(results);
    } else {
      alert("Tanaman tidak ditemukan!");
      setFilteredPlants(plants); // Menampilkan daftar tanaman kembali
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="bg-[#F9F9F9] py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Cari Tanaman Mu</h2>
          <div className="flex justify-center gap-2">
            <input
              type="text"
              placeholder="Mau Menanam Apa?"
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
          {filteredPlants.map((plant, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 h-80 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex flex-col justify-center items-center">
                <h3 className="font-bold text-lg">{plant.name}</h3>
                <p className="text-sm text-center">{plant.description}</p>
                <Link to={plant.link}>
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
