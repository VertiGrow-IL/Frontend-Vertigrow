import React from 'react'

export default function AlatDaurUlang() {
  return (
    <section className='container flex flex-col gap-10 items-center py-16'>
        <h3 className='text-2xl font-semibold'>
            Alat dan Bahan
        </h3>

        {/* konten */}
        <div className='flex flex-col gap-10 items-center'>
            <div className='flex gap-10'>
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="sarung tangan"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Sarung Tangan
                        </h3>
                        <p className=''>
                            Sebagai pelindung tangan saat bekerja dengan media tanam tanam yang sudah digunakan dan alat yang tajam.
                        </p>
                    </div>
                </div>

                {/* card 2 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="penyaring"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Saringan/Ayakan
                        </h3>
                        <p className=''>
                            Digunakan untuk memisahkan benda-benda keras, akar dan kotoran dari media tanam.
                        </p>
                    </div>
                </div>

            </div>

            <div className='flex gap-10'>
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="garpu tanah"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Garpu Tanah
                        </h3>
                        <p className=''>
                            Digunakan untuk mengaduk atau memecah gumpalan tanah.
                        </p>
                    </div>
                </div>

                {/* card 2 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="tempat penampungan"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Tempat Penampungan
                        </h3>
                        <p className=''>
                            EMber, bak, atau wadah besar untuk menyimpan media tanam yang sudah didaur ulang.
                        </p>
                    </div>
                </div>
                
            </div>

            <div className='flex gap-10'>
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="komposter"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Komposter
                        </h3>
                        <p className=''>
                            Jika ingin menambahkan unsur hara dengan pupuk organik, anda dapat menggunakan kompos yang terbuat dari sisa-sisa tanaman atau bahan organik lain .
                        </p>
                    </div>
                </div>

                {/* card 2 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="air"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Air
                        </h3>
                        <p className=''>
                            Untuk menyiram dan membersihkan media tanam dari kotoran dan sisa-sisa bahan kimia.
                        </p>
                    </div>
                </div>
                
            </div>
            
        </div>
        

        <div></div>
    </section>
  )
}
