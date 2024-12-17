import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import Footer from '../Components/Footer'
import DefinisiCaisim from '../Sections/Edukasi/Caisim/DefinisiCaisim'
import LangkahCaisim from '../Sections/Edukasi/Caisim/LangkahCaisim'
import AlatCaisim from '../Sections/Edukasi/Caisim/AlatCaisim'
import VideoCaisim from '../Sections/Edukasi/Caisim/VideoCaisim'

export default function EdukasiCaisim() {
  return (
    <>
        <NavbarUser/>
        <DefinisiCaisim/>
        <LangkahCaisim/>
        <AlatCaisim/>
        <VideoCaisim/>
        <Footer/>
    </>
  )
}
