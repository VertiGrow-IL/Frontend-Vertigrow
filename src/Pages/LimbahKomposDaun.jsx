import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import DefinisiFermentasiBokashi from '../Sections/Limbah/FermentasiBokashi/DefinisiFermentasiBokashi'
import DefinisiKomposDaun from '../Sections/Limbah/KomposDaun/DefinisiKomposDaun'
import AlatKomposDaun from '../Sections/Limbah/KomposDaun/AlatKomposDaun'
import LangkahKomposDaun from '../Sections/Limbah/KomposDaun/LangkahKomposDaun'
import VideoKomposDaun from '../Sections/Limbah/KomposDaun/VideoKomposDaun'
import Footer from '../Components/Footer'

export default function LimbahKomposDaun() {
  return (
    <>
      <NavbarUser/>
      <DefinisiKomposDaun/>
      <LangkahKomposDaun/>
      <AlatKomposDaun/>
      <VideoKomposDaun/>
      <Footer/>
    </>
  )
}
