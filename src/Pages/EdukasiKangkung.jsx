import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import Footer from '../Components/Footer'
import DefinisiKangkung from '../Sections/Edukasi/Kangkung/DefinisiKangkung'
import LangkahKangkung from '../Sections/Edukasi/Kangkung/LangkahKangkung'
import AlatKangkung from '../Sections/Edukasi/Kangkung/AlatKangkung'
import VideoKangkung from '../Sections/Edukasi/Kangkung/VideoKangkung'

export default function EdukasiKangkung() {
  return (
    <>
        <NavbarUser/>
        <DefinisiKangkung/>
        <LangkahKangkung/>
        <AlatKangkung/>
        <VideoKangkung/>
        <Footer/>
    </>
  )
}
