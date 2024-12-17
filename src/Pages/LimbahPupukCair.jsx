import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import DefinsiPupukCair from '../Sections/Limbah/PupukCair/DefinsiPupukCair'
import AlatPupukCair from '../Sections/Limbah/PupukCair/AlatPupukCair'
import LangkahPupukCair from '../Sections/Limbah/PupukCair/LangkahPupukCair'
import VideoPupukCair from '../Sections/Limbah/PupukCair/VideoPupukCair'
import Footer from '../Components/Footer'

export default function LimbahPupukCair() {
  return (
    <>
        <NavbarUser/>
        <DefinsiPupukCair/>
        <LangkahPupukCair/>
        <AlatPupukCair/>
        <VideoPupukCair/>
        <Footer/>
    </>
  )
}
