import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import DefinisiPupukKompos from '../Sections/Limbah/PupukKompos/DefinisiPupukKompos'
import AlatPupukKompos from '../Sections/Limbah/PupukKompos/AlatPupukKompos'
import LangkahPupukKompos from '../Sections/Limbah/PupukKompos/LangkahPupukKompos'
import VideoPupukKompos from '../Sections/Limbah/PupukKompos/VideoPupukKompos'
import Footer from '../Components/Footer'

export default function LimbahPupukKompos() {
  return (
    <>
        <NavbarUser/>
        <DefinisiPupukKompos/>
        <LangkahPupukKompos/>
        <AlatPupukKompos/>
        <VideoPupukKompos/>
        <Footer/>
    </>
  )
}
