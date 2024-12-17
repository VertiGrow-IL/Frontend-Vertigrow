import React, { useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const plants = [
    {
      image: "https://th.bing.com/th/id/R.81e4e862bb3df7799070844fe45e51e9?rik=02C8M7ixDCKAUQ&riu=http%3a%2f%2fthefarmatgreenvillage.com%2fwp-content%2fuploads%2f2018%2f05%2fheirloom-tomatoes.jpg&ehk=SGak%2fwbVDKqHBHUoAIln%2bvIipcboqNQNX%2bRxGeoq9SE%3d&risl=&pid=ImgRaw&r=0",
      name: "Bayam",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/bayam",
    },
    {
      image: "https://png.pngtree.com/background/20230426/original/pngtree-purple-eggplants-are-growing-in-a-field-picture-image_2485855.jpg",
      name: "Caisim",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/caisim",
    },
    {
      image: "https://asset.kompas.com/crops/0IdFfzSyf0w9DxTIauNwpCi8w9Q=/0x83:1000x583/750x500/data/photo/2019/08/06/5d492f045d831.jpg",
      name: "Daun Bawang",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/bawang",
    },
    {
      image: "https://djawanews.com/wp-content/uploads/2020/01/Hasil-panen-timun-www.romadecade.org_.jpg",
      name: "Kangkung Darat",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/kangkung",
    },
    {
      image: "https://satoeasa.com/wp-content/uploads/2022/05/Pasted-12.png",
      name: "Pakcoy",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/pakcoy",
    },
    {
      image: "https://ds393qgzrxwzn.cloudfront.net/cat1/img/images/0/lr3XpPtYqI.jpg",
      name: "Kucai",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/kucai",
    },
    {
      image: "https://img.herstory.co.id/articles/archive_20220107/sayur-buncis-20220107-124552.jpg",
      name: "Selada",
      description: "Modul belajar yang komprehensif tentang teknik vertikultur",
      link: "/selada",
    },
    {
      image: "https://assets-a1.kompasiana.com/items/album/2018/02/28/kebuners-com-5a96ccf8ab12ae5540685fd3.jpg?t=o&v=1200",
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
