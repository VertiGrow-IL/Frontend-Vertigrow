import { useNavigate } from 'react-router-dom';
import Chatbot from '../../assets/Layanan/Chatbot.jpg';

export default function SectionLayananChatbot() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/masuk"); // Navigate to the login page
  };

  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-20 gap-16 mt-36 px-6 md:px-20">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-500">
        <img
          src={Chatbot}
          alt="Chatbot AI"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#387F39] leading-tight">
          Chatbot: Mr.Grow
        </h2>
        <p className="text-lg md:text-xl text-neutral-700">
          Dapatkan panduan cepat dan solusi pertanyaan seputar vertikultur melalui chatbot AI kami. Cocok untuk pemula dan praktisi, membantu Anda dalam merawat tanaman vertikal secara efisien.
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
