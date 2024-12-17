import React, { useState } from 'react';
import MediaTanam from '../../../assets/VertiGuide/Langkah/Campuran Media.jpg'
import PipaPVC from '../../../assets/VertiGuide/Langkah/Media PVC.jpg'
import Lubang from '../../../assets/VertiGuide/Langkah/Pembuatan Lubang.jpg'
import TanamBenih from '../../../assets/VertiGuide/Langkah/Penanaman Benih.jpg'
import SiramBenih from '../../../assets/VertiGuide/Langkah/Penyiraman Benih.jpg'
import PupukTanaman from '../../../assets/VertiGuide/Langkah/Pemupukan.jpg'
import Bayam from '../../../assets/VertiGuide/Langkah/Panen Bayam.jpg'
import PanenBayam from '../../../assets/VertiGuide/Langkah/Pemanenan Bayam.jpg'
import Semai from '../../../assets/VertiGuide/Langkah/Penyemaian.jpg'
import TanamVertikal from '../../../assets/VertiGuide/Langkah/Penanaman Vertikal.jpg'
import PupukCair from '../../../assets/VertiGuide/Langkah/Penyiraman Pupuk.jpg'
import PanenCaisim from '../../../assets/VertiGuide/Langkah/Pemanenan Caisim.jpg'
import PilihTanaman from '../../../assets/VertiGuide/Langkah/Bawang.jpg'
import PotongTanaman from '../../../assets/VertiGuide/Langkah/Pemotongan Bawang.jpg'
import TanamBawang from '../../../assets/VertiGuide/Langkah/Tanam Bawang.jpeg'
import SiramBawang from '../../../assets/VertiGuide/Langkah/Penyiraman Bawang.jpg'
import PanenBawang from '../../../assets/VertiGuide/Langkah/Pemanenan Bawang.jpg'

const data = [
  {
    title: 'Siapkan Media Tanam',
    description: 'Campurkan tanah dan pupuk kompos dengan perbandingan 1:1.',
    img: MediaTanam,
  },
  {
    title: 'Pindahkan Media Tanam',
    description: 'Masukkan media tanam kedalam pipa PVC.',
    img: TanamVertikal,
  },
  {
    title: 'Pemilihan Tanaman',
    description: 'Untuk menanam daun bawang dari batangnya langsung, pilih beberapa daun bawang beserta akarnya dan pisahkan dengan yang lainnya.',
    img: PilihTanaman,
  },
  {
    title: 'Potong Tanaman',
    description: 'Potong akar yang masih panjang sekitar 1 cm, lalu potong batang 2 hingga 3 cm.',
    img: PotongTanaman,
  },
  {
    title: 'Buat Lubang',
    description: 'Buat lubang dengan kedalaman 1 cm pada media tanam pipa PVC.',
    img: Lubang,
  },
  {
    title: 'Penanaman',
    description: 'Tanam di media tanam dengan menyisahkan sekitar 1 cm.',
    img: TanamBawang,
  },
  {
    title: 'Penyiraman',
    description: 'Lakukan penyiraman sesuai kondisi tanah, jika tanah terlihat masih dalam keadan lembab, siram dalam waktu 2 hingga 3 hari.',
    img: SiramBawang,
  },
  {
    title: 'Pemupukan',
    description: 'Berikan pupuk NPK secukupnya selama 10 hari sekali agar memberikan nutrisi terbaik untuk daun bawang.',
    img: PupukTanaman,
  },
  {
    title: 'Pemanenan',
    description: 'Setelah berumur 2-3 bulan, daun bawang siap dipanen.',
    img: PanenBawang,
  },
];

const AlatBawang = () => {
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
        Langkah Penanaman Daun Bawang
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

export default AlatBawang;