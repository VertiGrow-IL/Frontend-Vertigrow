import Nizam from '../../assets/nizam.jpg'
import Alfi from '../../assets/alfi.jpeg'
import Anggie from '../../assets/anggie.jpg'
import Hamid from '../../assets/hamid.png'
import Dortea from '../../assets/dortea.jpg'
import Ammar from '../../assets/ammar.png'
import Fawwas from '../../assets/fawwas.jpg'
import Nadhira from '../../assets/nadhira.jpg'
import Nabiel from '../../assets/nabil.jpeg'
import Rifqi from '../../assets/rifqi.jpg'
import Arif from '../../assets/arif.png'

export default function SectionTim() {
  return (
    <section className="container my-28 px-4">
      <div className="flex flex-col items-center gap-16">
        <p className="text-3xl font-semibold text-center text-neutral-800">Tim Kami</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Card for Nizam */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Nizam} alt="Nizam" className="w-full h-60 object-cover" />
            <div className="p-6">
              <p className="font-semibold text-xl text-center text-neutral-800">Muhammad Syahrul Nizam</p>
              <p className="text-center text-gray-500">Project Manager</p>
            </div>
          </div>

          {/* Card for Alfi */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Alfi} alt="Alfi" className="w-full h-60 object-cover" />
            <div className="p-6">
              <p className="font-semibold text-xl text-center text-neutral-800">Alfiani Hanifah</p>
              <p className="text-center text-gray-500">UIUX Designer</p>
            </div>
          </div>

          {/* Card for Anggie */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Anggie} alt="Anggi" className="w-full h-60 object-cover" />
            <div className="p-6">
              <p className="font-semibold text-xl text-center text-neutral-800">Anggie Nadila</p>
              <p className="text-center text-gray-500">UIUX Designer</p>
            </div>
          </div>

          {/* Card for Hamid */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Hamid} alt="Hamid" className="w-full h-60 object-cover" />
            <div className="p-6">
              <p className="font-semibold text-xl text-center text-neutral-800">Mustholih Hamid Burhanil Wahid</p>
              <p className="text-center text-gray-500">Frontend Developer</p>
            </div>
          </div>

          {/* Card for Dortea */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={Dortea}
            alt="Dortea"
            className="w-full h-60 object-cover"
            style={{ objectPosition: "50% 2%" }} 

          />
          <div className="p-6">
            <p className="font-semibold text-xl text-center text-neutral-800">Dortea Ribka Tadete</p>
            <p className="text-center text-gray-500">Frontend Developer</p>
          </div>
        </div>


          {/* Card for Ammar */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Ammar} 
            alt="Ammar"
            className="w-full h-60 object-cover"
            style={{ objectPosition: "50% 10%" }} 
            />
            <div className="p-6">
              <p className="font-semibold text-xl text-center text-neutral-800">Ammar Ismail Kochan</p>
              <p className="text-center text-gray-500">Backend Developer</p>
            </div>
          </div>

          {/* Card for Fawwaz */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Fawwas} alt="Fawwaz" className="w-full h-60 object-cover" />
            <div className="p-6">
              <p className="font-semibold text-xl text-center text-neutral-800">Fawwaz Aydin Rafif</p>
              <p className="text-center text-gray-500">Machine Learning Engineer</p>
            </div>
          </div>

          {/* Card for Nadhirah */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Nadhira} alt="Nadhirah" className="w-full h-60 object-cover" />
            <div className="p-6">
              <p className="font-semibold text-xl text-center text-neutral-800">Nadhirah Meidiasty Maharani</p>
              <p className="text-center text-gray-500">Data Researcher</p>
            </div>
          </div>

         {/* Card for Rifqi */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={Rifqi}
            alt="Rifqi"
            className="w-full h-60 object-cover"
            style={{ objectPosition: "50% 25%" }} 
          />
          <div className="p-6">
            <p className="font-semibold text-xl text-center text-neutral-800">Muhammad Rifqi Febrian</p>
            <p className="text-center text-gray-500">Data Engineer</p>
          </div>
        </div>

          {/* Card for Nabiel */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Nabiel} 
            alt="Nabiel"
            className="w-full h-60 object-cover" 
            style={{ objectPosition: "-50% 45%" }} 

             />
            <div className="p-6">
              <p className="font-semibold text-xl text-center text-neutral-800">Nabiel Albar Djati</p>
              <p className="text-center text-gray-500">Data Engineer</p>
            </div>
          </div>

          {/* Card for Arif */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Arif} 
            alt="Arif"
             className="w-full 
             h-60 object-cover "
             style={{ objectPosition: "50% 80%" }} 

              />
            <div className="p-6">
              <p className="font-semibold text-xl text-center text-neutral-800">Muhammad Arif Perdana</p>
              <p className="text-center text-gray-500">Machine Learning Ops</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
