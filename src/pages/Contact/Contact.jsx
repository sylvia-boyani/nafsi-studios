import Hero from "../../components/contact/hero/Hero";
import ContactInfo from "../../components/contact/contactInfo/ContactInfo";
import Faq from "../../components/contact/faq/Faq";
import Map from "../../components/contact/map/Map";
import CTA from "../../components/home/CTA/CTA"

function Home() {
  return (
    <>
      <Hero />
      <ContactInfo />
      <Faq />
      <Map />
      <CTA />
    </>
  );
}

export default Home;