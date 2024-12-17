import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Card from "react-bootstrap/esm/Card";
import Edukasi from "../../assets/Layanan/Edukasi.png";
import Chatbot from "../../assets/Layanan/Chatbot.jpg";
import Manajemen from "../../assets/Layanan/Manajemen.png";

function SectionLayanan() {
  const navigate = useNavigate(); // Inisialisasi navigator

  const handleNavigate = () => {
    navigate("/masuk"); // Arahkan ke halaman masuk
  };

  return (
    <section className="flex justify-center my-20 px-6">
      <div className="container w-full max-w-7xl">
        {/* Judul */}
        <p className="font-semibold text-center text-2xl md:text-3xl text-neutral-800 mb-12">
          Layanan Kami yang Menginspirasi
        </p>

        {/* Kontainer Kartu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kartu 1 */}
          <Card className="shadow-lg rounded-xl transition duration-300 hover:scale-105">
            <Card.Img
              variant="top"
              src={Edukasi}
              className="h-48 w-full object-cover rounded-t-xl"
            />
            <Card.Body>
              <Card.Title className="text-lg font-semibold text-[#387F39]">
                VertiGuide: Panduan Pertanian Vertikal
              </Card.Title>
              <Card.Text className="text-base text-neutral-600 mb-4">
                Ingin hasil bertani maksimal meski dengan lahan terbatas? Temukan panduan lengkap untuk memulai vertikultur di rumah Anda!
              </Card.Text>
              <button
                onClick={handleNavigate} // Tambahkan handler klik
                className="bg-[#387F39] text-white px-5 py-2 mt-4 rounded-full hover:bg-green-900 transition-all duration-300"
              >
                Temukan Lebih Banyak
              </button>
            </Card.Body>
          </Card>

          {/* Kartu 2 */}
          <Card className="shadow-lg rounded-xl transition duration-300 hover:scale-105">
            <Card.Img
              variant="top"
              src={Chatbot}
              className="h-48 w-full object-cover rounded-t-xl"
            />
            <Card.Body>
              <Card.Title className="text-lg font-semibold text-[#387F39]">
                Chatbot Mr. Grow: Solusi Cerdas untuk Pertanian
              </Card.Title>
              <Card.Text className="text-base text-neutral-600 mb-4">
                Hadapi tantangan bertani dengan bantuan AI. Dapatkan jawaban cepat dan solusi efektif untuk masalah pertanian Anda.
              </Card.Text>
              <button
                onClick={handleNavigate} // Tambahkan handler klik
                className="bg-[#387F39] text-white px-5 py-2 mt-4 rounded-full hover:bg-green-900 transition-all duration-300"
              >
                Coba Sekarang
              </button>
            </Card.Body>
          </Card>

          {/* Kartu 3 */}
          <Card className="shadow-lg rounded-xl transition duration-300 hover:scale-105">
            <Card.Img
              variant="top"
              src={Manajemen}
              className="h-48 w-full object-cover rounded-t-xl"
            />
            <Card.Body>
              <Card.Title className="text-lg font-semibold text-[#387F39]">
                EcoLimbah: Solusi Limbah Ramah Lingkungan
              </Card.Title>
              <Card.Text className="text-base text-neutral-600 mb-4">
                Kelola limbah pertanian secara efisien dan ramah lingkungan. Mari berkontribusi pada pertanian yang lebih berkelanjutan.
              </Card.Text>
              <button
                onClick={handleNavigate} // Tambahkan handler klik
                className="bg-[#387F39] text-white px-5 py-2 mt-4 rounded-full hover:bg-green-900 transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default SectionLayanan;
