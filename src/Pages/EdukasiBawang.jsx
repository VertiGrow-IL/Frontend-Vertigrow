import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import Footer from '../Components/Footer'
import DefinisiBawang from '../Sections/Edukasi/DaunBawang/DefinisiBawang'
import LangkahBawang from '../Sections/Edukasi/DaunBawang/LangkahBawang'
import AlatBawang from '../Sections/Edukasi/DaunBawang/AlatBawang'
import VideoBawang from '../Sections/Edukasi/DaunBawang/VideoBawang'

export default function EdukasiBawang() {
  return (
    <>
        <NavbarUser/>
        <DefinisiBawang/>
        <LangkahBawang/>
        <AlatBawang/>
        <VideoBawang/>
        <Footer/>
    </>
  )
}
