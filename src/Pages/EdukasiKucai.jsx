import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import Footer from '../Components/Footer'
import DefinisiKangkung from '../Sections/Edukasi/Kangkung/DefinisiKangkung'
import LangkahKucai from '../Sections/Edukasi/Kucai/LangkahKucai'
import DefinisiKucai from '../Sections/Edukasi/Kucai/DefinisiKucai'
import AlatKucai from '../Sections/Edukasi/Kucai/AlatKucai'
import VideoKucai from '../Sections/Edukasi/Kucai/VideoKucai'

export default function EdukasiKucai() {
  return (
    <>
        <NavbarUser/>
        <DefinisiKucai/>
        <LangkahKucai/>
        <AlatKucai/>
        <VideoKucai/>
        <Footer/>
    </>
  )
}
