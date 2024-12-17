import NavbarUser from "../Components/NavbarUser"
import Footer from "../Components/Footer"
import Hero from "../Sections/Limbah/Hero"; // Sesuaikan path jika folder bernama `Section`
import Gallery from "../Sections/Limbah/Gallery"; // Sesuaikan path

export default function Limbah() {
  return (
    <>
      <NavbarUser />
      <Hero />
      <Gallery />
      <Footer />
    </>
  );
}
