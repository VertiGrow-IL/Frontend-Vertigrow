import { useNavigate } from 'react-router-dom';
import Edukasi from '../../assets/Layanan/Edukasi.png';

export default function SectionLayananEdukasi() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/masuk"); // Navigate to the login page
  };

  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-20 gap-16 mt-36 px-6 md:px-20">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
        <img 
          src={Edukasi} 
          alt="Edukasi Vertikultur" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 md:text-left">
        <p className="text-3xl md:text-4xl font-extrabold text-[#387F39] leading-tight">
          VertiGuide
        </p>
        <p className="text-lg md:text-xl text-neutral-700">
          Platform kami menyediakan materi edukasi vertikultur yang lengkap, memberikan panduan praktis dalam teknik bercocok tanam vertikal. Ideal untuk memulai dan mengembangkan pertanian di ruang terbatas.
        </p>
        <div className="flex justify-center md:justify-start">
          <button
            onClick={handleButtonClick}
            className="w-48 bg-[#387F39] text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-green-700 focus:outline-none transition duration-300 shadow-lg hover:shadow-xl"
          >
            Jelajahi
          </button>
        </div>
      </div>

    </section>
  );
}
