import React from "react";
import Edukasi from "../../assets/Layanan/Edukasi.png";
import Chatbot from "../../assets/Layanan/Chatbot.jpg";
import Manajemen from "../../assets/Layanan/Manajemen.png";

export default function SectionKeunggulan() {
  return (
    <section className="flex justify-center my-28 px-6">
      <div className="container w-full max-w-7xl">
        {/* Title */}
        <p className="font-semibold text-center text-2xl sm:text-3xl text-neutral-800 mb-10">
          Mengapa Memilih Kami?
        </p>

        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg h-80 bg-gray-900 transform hover:scale-105 transition duration-500">
            <img
              src={Edukasi}
              className="absolute top-0 left-0 h-full w-full object-cover"
              alt="Edukasi"
            />
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            {/* Text Container */}
            <div className="flex items-center justify-center absolute inset-0 text-center w-full text-white p-6">
              <div>
                <p className="text-lg md:text-xl font-semibold mb-4 transition-transform transform hover:scale-110">
                  50+ Jenis Tanaman yang Bisa Dipelajari
                </p>
                <p className="text-sm md:text-base opacity-75">
                  Temukan berbagai macam tanaman yang dapat memperkaya pengetahuan Anda di bidang pertanian.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg h-80 bg-gray-900 transform hover:scale-105 transition duration-500">
            <img
              src={Manajemen}
              className="absolute top-0 left-0 h-full w-full object-cover"
              alt="Manajemen"
            />
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            {/* Text Container */}
            <div className="flex items-center justify-center absolute inset-0 text-center w-full text-white p-6">
              <div>
                <p className="text-lg md:text-xl font-semibold mb-4 transition-transform transform hover:scale-110">
                  Sistem Pembelajaran yang Menyeluruh
                </p>
                <p className="text-sm md:text-base opacity-75">
                  Nikmati pengalaman pembelajaran yang terstruktur dengan metode yang telah terbukti efektif.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg h-80 bg-gray-900 transform hover:scale-105 transition duration-500">
            <img
              src={Chatbot}
              className="absolute top-0 left-0 h-full w-full object-cover"
              alt="ChatBot"
            />
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            {/* Text Container */}
            <div className="flex items-center justify-center absolute inset-0 text-center w-full text-white p-6">
              <div>
                <p className="text-lg md:text-xl font-semibold mb-4 transition-transform transform hover:scale-110">
                  ChatBot AI yang Relevan
                </p>
                <p className="text-sm md:text-base opacity-75">
                  Dapatkan jawaban cepat dan akurat dari ChatBot AI kami yang selalu siap membantu Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
