// import React from 'react'
import Navbar from '../Components/Navbar'
import SectionProfil from '../Sections/Tentang/SectionProfil'
import SectionVertikultur from '../Sections/Tentang/SectionVertikultur'
import SectionTim from '../Sections/Tentang/SectionTim'
import Footer from '../Components/Footer'

export default function Tentang() {
  return (
    <>
      <Navbar/>
      <SectionProfil/>
      <SectionVertikultur/>
      <SectionTim/>
      <Footer/>
    </>
  )
}
