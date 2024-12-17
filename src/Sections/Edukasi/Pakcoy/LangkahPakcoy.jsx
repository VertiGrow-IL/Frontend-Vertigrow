import React from 'react'

export default function TanamPakcoy() {
  return (
    <section className='container flex flex-col gap-10 items-center py-16'>
        <h3 className='text-3xl font-semibold'>
            Langkah Penanaman Pakcoy
        </h3>

        {/* konten */}
        <div className='flex flex-col gap-10 items-center'>
            {/* wadah */}
            <h3 className='text-2xl font-semibold'>
                Pembuatan Wadah
            </h3>

            <div className='flex gap-10'>
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="pemasangan pipa vertikal"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Pemasangan Pipa Vertikal
                        </h3>
                        <p className=''>
                            Tegakkan pipa di area dengan sinar matahari yang cukup.
                        </p>
                    </div>
                </div>

                {/* card 2 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="pengisian media tanam"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Pengisian Media Tanam
                        </h3>
                        <p className=''>
                            Tambahkan media tanam yang telah disediakan secara merata.
                        </p>
                    </div>
                </div>

                {/* card 3 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="penyiraman"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Penyiraman
                        </h3>
                        <p className=''>
                            Pasang sistem drip atau hidroponik diatas pipa.
                        </p>
                    </div>
                </div>
            </div>

            {/* penanaman */}
            <h3 className='text-2xl font-semibold'>
                Penanaman dan Perawatan
            </h3>
            <div className='flex gap-10'>
                {/* card 1 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="penanaman bibit"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Penanaman BIbit
                        </h3>
                        <p className=''>
                            Tanam bibit pada lubang di pipa PVC.
                        </p>
                    </div>
                </div>

                {/* card 2 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="penyiraman"
                    className='w-96 h-60 object-cover' />

                    {/* teks media tanam */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Penyiraman
                        </h3>
                        <p className=''>
                            Siram tanaman secara rutin tiap pagi dan sore untuk menjaga kelembapan tanaman.
                        </p>
                    </div>
                </div>

                {/* card 3 */}
                <div className='relative rounded-lg overflow-hidden bg-white text-white'>
                    <img 
                    src="https://picsum.photos/200/200" 
                    alt="pemupukan" 
                    className='w-96 h-60 object-cover' />

                    {/* Teks */}
                    <div className='flex flex-col absolute bottom-0 left-0 right-0 h-60 justify-center items-center text-center bg-black bg-opacity-50 p-5'>
                        <h3 className='text-xl font-semibold'>
                            Pemupukan
                        </h3>
                        <p className=''>
                            Pupuk tanaman setiap 2 minggu sekali untuk menjaga nutrisi tanaman.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        
    </section>
  )
}
