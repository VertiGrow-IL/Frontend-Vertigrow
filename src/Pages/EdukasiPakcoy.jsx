import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import Footer from '../Components/Footer'
import DefinisiPakcoy from '../Sections/Edukasi/Pakcoy/DefinisiPakcoy'
import AlatPakcoy from '../Sections/Edukasi/Pakcoy/AlatPakcoy'
import LangkahPakcoy from '../Sections/Edukasi/Pakcoy/LangkahPakcoy'
import VideoPakcoy from '../Sections/Edukasi/Pakcoy/VideoPakcoy'

export default function EdukasiPakcoy() {
  return (
    <>
        <NavbarUser/>
        <DefinisiPakcoy/>
        <LangkahPakcoy/>
        <AlatPakcoy/>
        <VideoPakcoy/>
        <Footer/>
    </>
  )
}
