import React, { useState } from 'react';
import MediaTanam from '../../../assets/VertiGuide/Langkah/Campuran Media.jpg'
import PipaPVC from '../../../assets/VertiGuide/Langkah/Media PVC.jpg'
import Lubang from '../../../assets/VertiGuide/Langkah/Pembuatan Lubang.jpg'
import TanamBenih from '../../../assets/VertiGuide/Langkah/Penanaman Benih.jpg'
import SiramBenih from '../../../assets/VertiGuide/Langkah/Penyiraman Benih.jpg'
import PupukTanaman from '../../../assets/VertiGuide/Langkah/Pemupukan.jpg'
import Bayam from '../../../assets/VertiGuide/Langkah/Panen Bayam.jpg'
import PanenBayam from '../../../assets/VertiGuide/Langkah/Pemanenan Bayam.jpg'

const data = [
  {
    title: 'Siapkan Media Tanam',
    description: 'Campurkan tanah pot dengan kompos atau pupuk organik untuk meningkatkan kesuburan dan drainase tanah.',
    img: MediaTanam,
  },
  {
    title: 'Pindahkan Media Tanam',
    description: 'Masukkan media tanam pada lubang pipa PVC.',
    img: PipaPVC,
  },
  {
    title: 'Buat Lubang',
    description: 'Buat lubang  pada media tanam dengan kedalaman kurang lebih.',
    img: Lubang,
  },
  {
    title: 'Tanam Benih',
    description: 'Tanam benih bayam, tutupi dengan menggunakan tanah atau kompos. Tekan perlahan agar benih berkontak dengan tanah.',
    img: TanamBenih,
  },
  {
    title: 'Siram Tanaman',
    description: 'Siram secara rutin hingga tanah lembab, tetapi hindari penyiraman berlebihan yang dapat membuat tanah terlalu basah.',
    img: SiramBenih,
  },
  {
    title: 'Pemupukan',
    description: 'Lakukan pemupukan setiap 2-3 minggu sekali.',
    img: PupukTanaman,
  },
  {
    title: 'Pemanenan',
    description: 'Tanaman bayam bisa dipanen dalam 4-6 minggu setelah penanaman.',
    img: Bayam,
  },
  {
    title: 'Pemanenan Ulang',
    description: 'Pilihlah daun bayam yang sudah cukup besar untuk dipanen, dan biarkan daun-daun kecil tetap tumbuh untuk panen berikutnya.',
    img: PanenBayam,
  },
];

const AlatBayam = () => {
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="container flex flex-col items-center py-16">
      <h3 className="text-3xl font-semibold mb-12">
        Langkah Penanaman Bayam
      </h3>

      <div className="w-full flex flex-col items-center gap-8">
        {paginatedData.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden bg-white text-white shadow-xl w-3/4"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end text-center bg-black bg-opacity-50 p-8">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-10">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-6 py-3 text-lg bg-green-700 text-white rounded-md ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800'
          }`}
        >
          Sebelumnya
        </button>
        <span className="text-lg font-medium text-gray-700">
          Halaman {currentPage} dari {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-6 py-3 text-lg bg-green-700 text-white rounded-md ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-800'
          }`}
        >
          Selanjutnya
        </button>
      </div>
    </section>
  );
};

export default AlatBayam;