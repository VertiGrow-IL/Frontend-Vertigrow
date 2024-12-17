import React from 'react'
import DefinisiBiocharOrganik from '../Sections/Limbah/BiocharOrganik/DefinisiBiocharOrganik'
import AlatBiocharOrganik from '../Sections/Limbah/BiocharOrganik/AlatBiocharOrganik'
import LangkahBiocharOrganik from '../Sections/Limbah/BiocharOrganik/LangkahBiocharOrganik'
import VideoBiocharOrganik from '../Sections/Limbah/BiocharOrganik/VideoBiocharOrganik'
import NavbarUser from '../Components/NavbarUser'
import Footer from '../Components/Footer'

export default function LimbahBiocharOrganik() {
  return (
    <>
      <NavbarUser/>
      <DefinisiBiocharOrganik/>
      <LangkahBiocharOrganik/>
      <AlatBiocharOrganik/>
      <VideoBiocharOrganik/>
      <Footer/>
    </>
  )
}
