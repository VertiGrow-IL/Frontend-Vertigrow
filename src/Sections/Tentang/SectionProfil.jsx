import Profil from '../../assets/Vertikultur.png'

export default function SectionProfil() {
  return (
    <section className="container mx-40 mb-20 flex flex-col lg:flex-row-reverse items-center py-16 gap-10 mt-36 px-80 lg:px-0">
      {/* Gambar profil di sebelah kanan */}
      <div className="relative w-full lg:w-1/2 overflow-hidden rounded-xl shadow-xl">
        <img 
          src={Profil} 
          alt="Vertikultur" 
          className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition duration-500" 
        />
        <div className="absolute inset-0 bg-black opacity-25 rounded-xl"></div>
      </div>

      {/* Teks profil */}
      <div className="flex flex-col gap-6 lg:w-1/2">
        <h2 className="text-4xl font-extrabold text-[#387F39] lg:text-left text-shadow-md">
          VertiGrow
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed opacity-90 transition-opacity duration-500 hover:opacity-100">
          Vertigrow adalah platform inovatif yang mengajak masyarakat urban, termasuk Anda yang memiliki lahan terbatas, untuk mengembangkan hobi berkebun dengan teknik vertikultur. Kami hadir dengan solusi praktis dan inspiratif bagi Anda yang ingin menanam sendiri di rumah, sekaligus mendukung pertanian yang ramah lingkungan dan berkelanjutan.
        </p>
      </div>
    </section>
  );
}
