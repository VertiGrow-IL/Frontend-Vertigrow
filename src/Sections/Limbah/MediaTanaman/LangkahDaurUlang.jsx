import React from 'react'

export default function LangkahDaurUlang() {
  return (
    <section className='container flex flex-col gap-10 items-center py-16'>
        <h3 className='text-2xl font-semibold'>
            Langkah Daur Ulang Media Tanam
        </h3>

        {/* konten */}
        <div className='flex flex-col gap-10 items-center'>
            <div className='flex gap-10'>
                
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="persiapan bahan"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Persiapan Bahan
                        </h3>
                        <p className=''>
                            Kumpulkan bahan hijau dan coklat.
                        </p>
                    </div>
                </div>

                {/* card 2 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="membuat campuran"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Pembuatan Campuran
                        </h3>
                        <p className=''>
                            Buatlah lapisan dengan ketebalan 10-15 cm untuk setiap bahannya, diawali dengan bahan coklat dan dilanjutkan dengan bahan hijau diatasnya.
                        </p>
                    </div>
                </div>

                {/* card 3 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="atur kelembapan"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Kelembapan
                        </h3>
                        <p className=''>
                            Semprotkan air ke tumpukan kompos yang telah dibuat.
                        </p>
                    </div>
                </div>

                {/* card 4 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="aerasi"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Aerasi
                        </h3>
                        <p className=''>
                            Aduk campuran secara berkala setiap 2-4 minggu.
                        </p>
                    </div>
                </div>

            </div>
        </div>

    </section>
  )
}
