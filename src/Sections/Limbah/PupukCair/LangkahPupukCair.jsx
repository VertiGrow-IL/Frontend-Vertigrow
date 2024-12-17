import React from 'react'
import AirKelapa from '../../../assets/EcoLimbah/AlatBahan/Air Kelapa.jpg'
import Air from '../../../assets/EcoLimbah/AlatBahan/Air.jpg'
import Besi from '../../../assets/EcoLimbah/AlatBahan/Besi.jpg'
import BaraApi from '../../../assets/EcoLimbah/AlatBahan/Bara Api.jpg'
import BiocharPadi from '../../../assets/EcoLimbah/AlatBahan/Biochar Padi.jpg'
import Cangkul from '../../../assets/EcoLimbah/AlatBahan/Cangkul.jpg'
import DaunKering from '../../../assets/EcoLimbah/AlatBahan/Daun Kering.jpg'
import DaunKuning from '../../../assets/EcoLimbah/AlatBahan/Daun Kuning.jpg'
import Ember from '../../../assets/EcoLimbah/AlatBahan/Ember.jpg'
import GulaPasir from '../../../assets/EcoLimbah/AlatBahan/Gula.jpg'
import Jerigen from '../../../assets/EcoLimbah/AlatBahan/Jerigen.jpg'
import Kardus from '../../../assets/EcoLimbah/AlatBahan/Kardus.jpg'
import KayuBakar from '../../../assets/EcoLimbah/AlatBahan/Kayu Bakar.jpg'
import EM4 from '../../../assets/EcoLimbah/AlatBahan/Larutan EM4.jpg'
import Mesin from '../../../assets/EcoLimbah/AlatBahan/Mesin.jpg'
import Molase from '../../../assets/EcoLimbah/AlatBahan/Molase.jpg'
import Micin from '../../../assets/EcoLimbah/AlatBahan/Penyedap Makanan.jpg'
import Plastik from '../../../assets/EcoLimbah/AlatBahan/Plastik.jpg'
import Kompos from '../../../assets/EcoLimbah/AlatBahan/Pupuk Kompos.jpg'
import SampahDapur from '../../../assets/EcoLimbah/AlatBahan/Sampah Dapur.jpg'
import Dedak from '../../../assets/EcoLimbah/AlatBahan/Sekam Padi.jpg'
import SekamPadi from '../../../assets/EcoLimbah/AlatBahan/Sekam.jpg'
import SekopKecil from '../../../assets/EcoLimbah/AlatBahan/Sekop Kecil.jpg'
import Selang from '../../../assets/EcoLimbah/AlatBahan/Selang.jpg'
import Sprayer from '../../../assets/EcoLimbah/AlatBahan/Semprotan Air.jpg'
import SerbukKayu from '../../../assets/EcoLimbah/AlatBahan/Serbuk Kayu.jpg'
import Tanah from '../../../assets/EcoLimbah/AlatBahan/Tanah.jpg'
import Telur from '../../../assets/EcoLimbah/AlatBahan/Telur.jpg'
import TongPlastik from '../../../assets/EcoLimbah/AlatBahan/Tong Plastik.jpg'
import Toples from '../../../assets/EcoLimbah/AlatBahan/Toples.jpg'
import Triplek from '../../../assets/EcoLimbah/AlatBahan/Triplek.jpg'
import Tutup from '../../../assets/EcoLimbah/AlatBahan/Tutup.jpg'
import BotolBekas from '../../../assets/EcoLimbah/AlatBahan/Botol Bekas.jpg'
import Cutter from '../../../assets/EcoLimbah/AlatBahan/Cutter.jpg'
import Bibit from '../../../assets/EcoLimbah/AlatBahan/Bibit.jpg'
import Kerikil from '../../../assets/EcoLimbah/AlatBahan/Kerikil.jpg'

export default function LangkahPupukCair() {
  return (
    <section className='container flex flex-col gap-10 items-center py-10'>
        <h3 className='text-3xl font-semibold'>
            Alat dan Bahan
        </h3>

        {/* konten */}
        <div className='flex flex-col gap-10 items-center'>

            {/* baris 1 */}
            <div className='flex gap-10'>
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Telur} 
                    alt="1 Butir Telur"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            1 Butir Telur
                        </h3>
                        
                    </div>
                </div>

                {/* card 2 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Micin} 
                    alt="10 gr Penyedap Makanan"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            10 gr Penyedap Makanan
                        </h3>
                        
                    </div>
                </div>

                {/* card 3 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Molase} 
                    alt="100 ml Molase atau Gula Jawa"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            100 ml Molase atau Gula Jawa
                        </h3>
                        
                    </div>
                </div>
            </div>

            {/* baris 2 */}
            <div className='flex gap-10'>
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={EM4} 
                    alt="200 ml Larutan EM4"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            200 ml Larutan EM4
                        </h3>
                        
                    </div>
                </div>

                {/* card 2 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={AirKelapa} 
                    alt="1 Liter Air Kelapa"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            1 Liter Air Kelapa
                        </h3>
                        
                    </div>
                </div>

                {/* card 3 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Ember} 
                    alt="Ember" 
                    className='w-60 h-60 object-cover' />

                    {/* Teks */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Ember
                        </h3>
                        
                    </div>
                </div>
            </div>
            
            {/* baris 3 */}
            <div className='flex gap-10'>
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src={Toples} 
                    alt="Toples Kedap Udara"
                    className='w-60 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Toples Kedap Udara
                        </h3>
                        
                    </div>
                </div>
            </div>

        </div>
        
    </section>
  )
}