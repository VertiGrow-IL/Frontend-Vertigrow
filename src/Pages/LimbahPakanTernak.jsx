import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import DefinisiPakanTernak from '../Sections/Limbah/PakanTernak/DefinisiPakanTernak'
import AlatPakanTernak from '../Sections/Limbah/PakanTernak/AlatPakanTernak'
import LangkahPakanTernak from '../Sections/Limbah/PakanTernak/LangkahPakanTernak'
import VideoPakanTernak from '../Sections/Limbah/PakanTernak/VideoPakanTernak'
import Footer from '../Components/Footer'

export default function LimbahPakanTernak() {
  return (
    <>
        <NavbarUser/>
        <DefinisiPakanTernak/>
        <LangkahPakanTernak/>
        <AlatPakanTernak/>
        <VideoPakanTernak/>
        <Footer/>
    </>
  )
}
