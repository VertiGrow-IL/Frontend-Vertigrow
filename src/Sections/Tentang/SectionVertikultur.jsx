import Vertikultur from '../../assets/Layanan/Chatbot.jpg';

export default function SectionVertikultur() {
  return (
    <section className="bg-[#387F39] py-16">
      {/* Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-2 lg:px-20">
        {/* Text Description */}
        <div className="flex flex-col gap-8 lg:w-1/2 text-white">
          <h2 className="text-4xl font-extrabold lg:text-left text-white mb-6 text-shadow-md leading-tight">
            Apa itu Vertikultur?
          </h2>
          <p className="text-lg sm:text-xl text-justify leading-relaxed opacity-90 transition-opacity duration-500 hover:opacity-100">
            Vertikultur adalah teknik pertanian yang memanfaatkan ruang secara vertikal, memungkinkan tanaman tumbuh dalam lapisan atau struktur bertingkat. Metode ini dapat mengoptimalkan ruang terbatas dan meningkatkan efisiensi pertanian, terutama di area perkotaan. 
            <br /><br />
            Dengan metode ini, petani dapat memaksimalkan hasil pertanian meskipun di lahan yang terbatas. Konsep ini membawa solusi cerdas bagi pertanian modern yang ramah lingkungan.
          </p>
        </div>

        {/* Vertikultur Image */}
        <div className="lg:w-1/2 relative overflow-hidden rounded-xl shadow-lg transition-transform duration-500 transform hover:scale-105">
          <img 
            src={Vertikultur} 
            alt="Vertikultur"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
        </div>
      </div>
    </section>
  );
}
