import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SectionHero from '../Sections/Beranda/SectionHero'
import SectionLayanan from '../Sections/Beranda/SectionLayanan'
import SectionKeunggulan from '../Sections/Beranda/SectionKeunggulan'
import SectionTentang from '../Sections/Beranda/SectionTentang'

export default function Home() {
  return (
    <>
      <Navbar/>
      <SectionHero/>
      <SectionTentang/>
      <SectionLayanan/>
      <SectionKeunggulan/>
      <Footer/>
    </>
  )
}
