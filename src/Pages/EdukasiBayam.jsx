import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import Footer from '../Components/Footer'
import DefinisiBayam from '../Sections/Edukasi/Bayam/DefinisiBayam'
import LangkahBayam from '../Sections/Edukasi/Bayam/LangkahBayam'
import AlatBayam from '../Sections/Edukasi/Bayam/AlatBayam'
import VideoBayam from '../Sections/Edukasi/Bayam/VideoBayam'

export default function EdukasiBayam() {
  return (
    <>
        <NavbarUser/>
        <DefinisiBayam/>
        <LangkahBayam/>
        <AlatBayam/>
        <VideoBayam/>
        <Footer/>
    </>
  )
}
