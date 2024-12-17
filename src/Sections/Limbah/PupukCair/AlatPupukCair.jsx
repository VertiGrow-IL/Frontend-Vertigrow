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
import Cair2 from '../../../assets/EcoLimbah/Langkah/MSG.jpg'
import Cair3 from '../../../assets/EcoLimbah/Langkah/langkah-cair-3.jpeg'
import Cair4 from '../../../assets/EcoLimbah/Langkah/langkah-cair-4.jpg'
import Cair5 from '../../../assets/EcoLimbah/Langkah/langkah-cair-5.jpg'
import Cair6 from '../../../assets/EcoLimbah/Langkah/Campuran Toples.jpeg'
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

const data = [
  {
    title: 'Siapkan Telur',
    description: 'Pecahkan telur bebek ke dalam ember, kemudian kocok hingga kuning dan putih telurnya menyatu.',
    img: Cair1,
  },
  {
    title: 'Tambahkan Penyedap Makanan',
    description: 'Tambahkan penyedap makanan sebanyak 10 gram atau kira-kira dua sendok makan. Aduk hingga tercampur merata.',
    img: Cair2,
  },
  {
    title: 'Campurkan Molase',
    description: 'Selanjutnya tambahkan molase atau tetes tebu sebanyak 100 ml. Kamu juga bisa mengganti molase dengan gula jawa yang sudah dicairkan. Kembali aduk agar bahannya tercampur merata.',
    img: Cair3,
  },
  {
    title: 'Tambahkan Larutan EM4',
    description: 'Masukkan 200 ml EM4 agar proses fermentasi pupuk organik cair lebih cepat. Aduk-aduk lagi campuran bahan-bahan tersebut.',
    img: Cair4,
  },
  {
    title: 'Campurkan Air Kelapa',
    description: 'Kemudian tambahkan 1 liter air kelapa dan aduk hingga tercampur sempurna. Bila di rumah tidak ada air kelapa, kamu bisa menggantinya dengan air bekas cucian beras.',
    img: Cair5,
  },
  {
    title: 'Pindahkan Campuran',
    description: 'Masukkan campuran tersebut ke dalam toples dam tutup rapat agar udara tak masuk.',
    img: Cair6,
  },
  {
    title: 'Diamkan Campuran',
    description: 'Simpan pupuk cair di tempat gelap selama 2 minggu agar proses fermentasi berhasil.',
    img: Cair7,
  },
  {
    title: 'Pupuk Siap Digunakan',
    description: 'Bila sudah tak ada busa dan baunya segar seperti tapai, berarti proses fermentasi telah selesai.',
    img: Cair8,
  },
];

const AlatPupukCair = () => {
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
        Langkah Pengolahan Limbah Organik Menjadi Pupuk Cair
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

export default AlatPupukCair;