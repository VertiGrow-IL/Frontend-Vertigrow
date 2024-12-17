import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import DefinisiFermentasiBokashi from '../Sections/Limbah/FermentasiBokashi/DefinisiFermentasiBokashi'
import AlatFermentasiBokashi from '../Sections/Limbah/FermentasiBokashi/AlatFermentasiBokashi'
import LangkahFermentasiBokashi from '../Sections/Limbah/FermentasiBokashi/LangkahFermentasiBokashi'
import VideoFermentasiBokashi from '../Sections/Limbah/FermentasiBokashi/VideoFermentasiBokashi'
import Footer from '../Components/Footer'

export default function LimbahFermentasiBokashi() {
  return (
    <>
      <NavbarUser/>
      <DefinisiFermentasiBokashi/>
      <LangkahFermentasiBokashi/>
      <AlatFermentasiBokashi/>
      <VideoFermentasiBokashi/>
      <Footer/>
    </>
  )
}
