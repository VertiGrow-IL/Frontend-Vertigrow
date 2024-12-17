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
import PupukTanah from '../../../assets/VertiGuide/Langkah/Pemupukan Tanah.png'
import SiramKangkung from '../../../assets/VertiGuide/Langkah/Penyiraman bayam.jpg'
import JarangKangkung from '../../../assets/VertiGuide/Langkah/Penjarangan.jpg'
import SiangKangkung from '../../../assets/VertiGuide/Langkah/Penyiangan.jpg'
import PanenKangkung from '../../../assets/VertiGuide/Langkah/Kangkung.jpg'
import PanenUlangKangkung from '../../../assets/VertiGuide/Langkah/Pemanenan Kembali Kangkung.jpg'
import SiramKucai from '../../../assets/VertiGuide/Langkah/Penyiraman Kucai.jpg'
import JarangKucai from '../../../assets/VertiGuide/Langkah/Penjarangan Kucai.jpg'
import PupukNPK from '../../../assets/VertiGuide/Langkah/Pemupukan NPK.jpg'
import PanenKucai from '../../../assets/VertiGuide/Langkah/Kucai.jpg'
import PindahKucai from '../../../assets/VertiGuide/Langkah/Kucai Mini.jpg'
import SiramBayam from '../../../assets/VertiGuide/Langkah/Penyiraman bayam.jpg'
import Siang from '../../../assets/VertiGuide/Langkah/Penyiangan.jpg'
import PanenPakcoy from '../../../assets/VertiGuide/Langkah/Pakcoy.jpeg'

const data = [
  {
    title: 'Semai Bibit',
    description: 'Semai bibit yang telah disiapkan di media tanam dari campuran tanah dan kompos.',
    img: Semai,
  },
  {
    title: 'Penyiraman Bibit',
    description: 'Lakukan penyiraman secara rutin agar benih tumbuh menjadi bibit atau tanaman muda yang sehat',
    img: SiramBenih,
  },
  {
    title: 'Pindahkan Tanaman',
    description: 'Setelah bibit memiliki dua hingga tiga helai daun, baru dipindahkan ke media tanam vertikultur.',
    img: PindahKucai,
  },
  {
    title: 'Siapkan Media Vertikultur',
    description: 'Masukkan campuran media tanam yang sebelumnya dibuat ke lubang pada pipa PVC.',
    img: PipaPVC,
  },
  {
    title: 'Siram Tanaman',
    description: 'Lakukan penyiraman sebanyak dua kali sehari atau saat media tanam terlihat kering.',
    img: SiramBayam,
  },
  {
    title: 'Penyiangan',
    description: 'Lakukan penyiangan tanaman dengan cara membersihkan gulma.',
    img: Siang,
  },
  {
    title: 'Pemupukan',
    description: 'Lakukan juga pemupukan menggunakan pupuk kompos atau bokashi setelah tanaman mencapai umur 7-10 hari setelah tanam.',
    img: PupukNPK,
  },
  {
    title: 'Kucai Siap Dianen',
    description: 'Tanaman kucai mulai bisa dipanen setelah 25-30 hari setelah tanam.',
    img: PanenPakcoy,
  },
];

const AlatPakcoy = () => {
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
        Langkah Penanaman Pakcoy
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

export default AlatPakcoy;