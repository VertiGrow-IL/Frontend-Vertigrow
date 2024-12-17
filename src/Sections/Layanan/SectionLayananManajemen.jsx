import { useNavigate } from 'react-router-dom';
import Manajemen from '../../assets/Layanan/Manajemen.png';

export default function SectionLayananManajemen() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/masuk"); // Navigate to the login page
  };

  return (
    <section className="w-full bg-[#387F39] py-20 mt-36 rounded-lg shadow-lg">
      
      {/* Container for content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6 md:px-20">

        {/* Image Section */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-md hover:scale-105 transform transition duration-500">
          <img 
            src={Manajemen} 
            alt="Manajemen Limbah" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight md:text-left">
            EcoLimbah
          </h2>
          <p className="text-lg md:text-xl md:text-left">
            Menawarkan panduan tentang manajemen limbah pertanian. Kami memberikan tips untuk mengelola hasil limbah pertanian agar dapat dimanfaatkan kembali, mendukung keberlanjutan dan efisiensi dalam bercocok tanam.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={handleButtonClick}
              className="w-48 bg-[#F8F8F9] text-[#387F39] py-3 px-6 rounded-lg text-xl font-semibold hover:bg-[#d3d3d3] focus:outline-none transition duration-300 shadow-lg hover:shadow-xl"
            >
              Jelajahi
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
