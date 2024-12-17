import React from 'react'

export default function VideoDaurUlang() {
  return (
    <section className='container flex flex-col justify-center items-center gap-10 py-16 mb-10'>
        <video controls className='rounded-xl w-full'>
            <source src='https://www.petanikode.com/img/html-video/cat-herd.webm' />
        </video>

        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-2xl font-semibold'>
            Video Tutorial Daur Ulang Media Tanam
          </h3>
          <p className=''>
            Dengan langkah-langkah ini, anda dapat mendaur ulang media tanam dalam sistem vertikultur dengan efisien.
          </p>
        </div>
    </section>
  )
}
