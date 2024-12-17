import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import Footer from '../Components/Footer'
import LangkahSelada from '../Sections/Edukasi/Selada/LangkahSelada'
import AlatSelada from '../Sections/Edukasi/Selada/AlatSelada'
import VideoSelada from '../Sections/Edukasi/Selada/VideoSelada'
import DefinisiSelada from '../Sections/Edukasi/Selada/DefinisiSelada'

export default function EdukasiSelada() {
  return (
    <>
        <NavbarUser/>
        <DefinisiSelada/>
        <LangkahSelada/>
        <AlatSelada/>
        <VideoSelada/>
        <Footer/>
    </>
  )
}
