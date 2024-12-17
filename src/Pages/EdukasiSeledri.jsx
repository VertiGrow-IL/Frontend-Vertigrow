import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import Footer from '../Components/Footer'
import DefinisiSeledri from '../Sections/Edukasi/Seledri/DefinisiSeledri'
import LangkahSeledri from '../Sections/Edukasi/Seledri/LangkahSeledri'
import AlatSeledri from '../Sections/Edukasi/Seledri/AlatSeledri'
import VideoSeledri from '../Sections/Edukasi/Seledri/VideoSeledri'

export default function EdukasiSeledri() {
  return (
    <>
        <NavbarUser/>
        <DefinisiSeledri/>
        <LangkahSeledri/>
        <AlatSeledri/>
        <VideoSeledri/>
        <Footer/>
    </>
  )
}
