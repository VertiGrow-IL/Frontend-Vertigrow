// import React from 'react'
import Navbar from '../Components/Navbar'
import SectionLayananEdukasi from '../Sections/Layanan/SectionLayananEdukasi'
import SectionLayananManajemen from '../Sections/Layanan/SectionLayananManajemen'
import SectionLayananChatbot from '../Sections/Layanan/SectionLayananChatbot'
import Footer from '../Components/Footer'

export default function Layanan() {
  return (
    <>
      <Navbar/>
      <SectionLayananEdukasi/>
      <SectionLayananManajemen/>
      <SectionLayananChatbot/>
      <Footer/>
    </>
  )
}
