import React from 'react'
import NavbarUser from '../Components/NavbarUser'
import Footer from '../Components/Footer'
import DefinisiDaurUlang from '../Sections/Limbah/MediaTanaman/DefinisiDaurUlang'
import AlatDaurUlang from '../Sections/Limbah/MediaTanaman/AlatDaurUlang'
import VideoDaurUlang from '../Sections/Limbah/MediaTanaman/VideoDaurUlang'
import LangkahDaurUlang from '../Sections/Limbah/MediaTanaman/LangkahDaurUlang'

export default function ManajemenDaurUlang() {
  return (
    <>
        <NavbarUser/>
        <DefinisiDaurUlang/>
        <AlatDaurUlang/>
        <LangkahDaurUlang/>
        <VideoDaurUlang/>
        <Footer/>
    </>
  )
}
