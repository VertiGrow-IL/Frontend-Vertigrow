import React, { useState } from 'react';
import Biochar1 from '../../../assets/EcoLimbah/Langkah/langkah-biochar-1.jpg'
import Biochar2 from '../../../assets/EcoLimbah/Langkah/langkah-biochar-2.jpg'
import Biochar3 from '../../../assets/EcoLimbah/Langkah/langkah-biochar-3.jpg'
import Biochar4 from '../../../assets/EcoLimbah/Langkah/langkah-biochar-4.jpeg'
import Biochar5 from '../../../assets/EcoLimbah/Langkah/langkah-biochar-5.jpeg'
import Biochar6 from '../../../assets/EcoLimbah/Langkah/langkah-biochar-6.jpg'
import Biochar7 from '../../../assets/EcoLimbah/Langkah/langkah-biochar-7.jpg'
import Biochar8 from '../../../assets/EcoLimbah/Langkah/langkah-biochar-8.jpeg'
import Biochar9 from '../../../assets/EcoLimbah/Langkah/langkah-biochar-9.png'
import Biochar10 from '../../../assets/EcoLimbah/Langkah/langkah-biochart-10.jpg'
import Bokashi1 from '../../../assets/EcoLimbah/Langkah/langkah-bokasih-1.jpg'
import Bokashi2 from '../../../assets/EcoLimbah/Langkah/langkah-bokasih-2.jpg'
import Bokashi3 from '../../../assets/EcoLimbah/Langkah/langkah-bokasih-3.jpg'
import Bokashi4 from '../../../assets/EcoLimbah/Langkah/langkah-bokasih-4.jpg'
import Bokashi5 from '../../../assets/EcoLimbah/Langkah/langkah-bokasih-5.jpg'
import Bokashi6 from '../../../assets/EcoLimbah/Langkah/langkah-bokasih-6.jpg'
import Bokashi7 from '../../../assets/EcoLimbah/Langkah/langkah-bokasih-7.jpg'
import Cair1 from '../../../assets/EcoLimbah/Langkah/langkah-cair-1.jpg'
//import Cair2 from '../../../assets/EcoLimbah/Langkah/langkah-cair-2.png'
import Cair3 from '../../../assets/EcoLimbah/Langkah/langkah-cair-3.jpeg'
import Cair4 from '../../../assets/EcoLimbah/Langkah/langkah-cair-4.jpg'
import Cair5 from '../../../assets/EcoLimbah/Langkah/langkah-cair-5.jpg'
//import Cair6 from '../../../assets/EcoLimbah/Langkah/langkah-cair-6.png'
import Cair7 from '../../../assets/EcoLimbah/Langkah/langkah-cair-7.jpg'
import Cair8 from '../../../assets/EcoLimbah/Langkah/langkah-cair-8.jpeg'
import Hijau1 from '../../../assets/EcoLimbah/Langkah/langkah-hijau-1.jpg'
import Hijau2 from '../../../assets/EcoLimbah/Langkah/langkah-hijau-2.jpg'
import Hijau3 from '../../../assets/EcoLimbah/Langkah/langkah-hijau-3.jpg'
import Hijau5 from '../../../assets/EcoLimbah/Langkah/langkah-hijau-5.jpg'
import Hijau6 from '../../../assets/EcoLimbah/Langkah/langkah-hijau-6.jpg'
import Kompos1 from '../../../assets/EcoLimbah/Langkah/langkah-kompos-1.jpg'
import Kompos2 from '../../../assets/EcoLimbah/Langkah/langkah-kompos-2.jpg'
import Kompos3 from '../../../assets/EcoLimbah/Langkah/langkah-kompos-3.jpg'
import Kompos4 from '../../../assets/EcoLimbah/Langkah/langkah-kompos-4.jpg'
import Kompos5 from '../../../assets/EcoLimbah/Langkah/langkah-kompos-5.jpg'
import Kompos6 from '../../../assets/EcoLimbah/Langkah/langkah-kompos-6.jpg'
import Maggot1 from '../../../assets/EcoLimbah/Langkah/langkah-maggot-1.jpg'
import Maggot2 from '../../../assets/EcoLimbah/Langkah/langkah-manggot-2.jpg'
import Maggot3 from '../../../assets/EcoLimbah/Langkah/langkah-manggot-3.jpg'
import Maggot4 from '../../../assets/EcoLimbah/Langkah/langkah-manggot-4.jpg'
import Maggot5 from '../../../assets/EcoLimbah/Langkah/langkah-manggot-5.jpeg'
import Maggot6 from '../../../assets/EcoLimbah/Langkah/langkah-manggot-6.jpg'
import Maggot7 from '../../../assets/EcoLimbah/Langkah/langkah-manggot-7.jpg'
import Maggot8 from '../../../assets/EcoLimbah/Langkah/langkah-manggot-8.jpg'
import Kocok from '../../../assets/EcoLimbah/Langkah/Kocok Jerigen.jpg'
import Potongan from '../../../assets/EcoLimbah/Langkah/Potongan Daun Kering.jpg'
import KomposJadi from '../../../assets/EcoLimbah/Langkah/Kompos Jadi.jpg'

const data = [
  {
    title: 'Pencampuran Bahan',
    description: 'Campurkan 20 ml larutan EM4, 10 gr gula pasir, dan 1000 ml air ke dalam jerigen.',
    img: Hijau1,
  },
  {
    title: 'Diamkan Larutan',
    description: 'Kocok campuran tersebut agar merata, lalu diamkan selama kurang lebih 24 jam.',
    img: Kocok,
  },
  {
    title: 'Potong Daun Kering',
    description: 'Potong kecil-kecil sampah daun kering yang telah disiapkan.',
    img: Potongan,
  },
  {
    title: 'Campurkan Daun Kering',
    description: 'Ikat bahan yang telah tercampur dengan plastik yang telah diberi beberapa lubang keciCampurkan potongan daun kering dan sampah dapur dengan rasio 1:1 ke dalam tong plastik.',
    img: Hijau5,
  },
  {
    title: 'Tambahkan Larutan EM4',
    description: 'Tambahkan larutan EM4 yang telah difermentasikan.',
    img: Hijau1,
  },
  {
    title: 'Proses Pengkomposan',
    description: 'Lakukan proses pengkomposan dengan cara menambahkan sampah organik diatas tong plastik tersebut.',
    img: Bokashi5,
  },
  {
    title: 'Aduk Kompos',
    description: 'Aduk setiap 3 hari sekali untuk memasukan oksigen dan menurunkan suhu campuran tersebut.',
    img: Kompos5,
  },
  {
    title: 'Kompos Siap Digunakan',
    description: 'Kompos siap digunakan apabila cairan sudah berwarna coklat kehitaman dan tidak berbau.',
    img: KomposJadi,
  },
];

const AlatKomposDaun = () => {
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
        Langkah Pengolahan Limbah Daun Kering
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

export default AlatKomposDaun;