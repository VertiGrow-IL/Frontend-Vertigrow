import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import DefinisiUpcyclingWadah from '../Sections/Limbah/UpcyclingWadah/DefinisiUpcyclingWadah'
import AlatUpcyclingWadah from '../Sections/Limbah/UpcyclingWadah/AlatUpcyclingWadah'
import LangkahUpcyclingWadah from '../Sections/Limbah/UpcyclingWadah/LangkahUpcyclingWadah'
import VideoUpcyclingWadah from '../Sections/Limbah/UpcyclingWadah/VideoUpcyclingWadah'
import Footer from '../Components/Footer'

export default function LimbahUpcyclingWadah() {
  return (
    <>
        <NavbarUser/>
        <DefinisiUpcyclingWadah/>
        <LangkahUpcyclingWadah/>
        <AlatUpcyclingWadah/>
        <VideoUpcyclingWadah/>
        <Footer/>
    </>
  )
}
