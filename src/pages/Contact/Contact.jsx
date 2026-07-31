import Hero from "../../components/contact/hero/Hero";
import ContactInfo from "../../components/contact/contactInfo/ContactInfo";
import Faq from "../../components/contact/faq/Faq";
import CTA from "../../components/home/CTA/CTA"

function Home() {
  return (
    <>
      <Hero />
      <ContactInfo />
      <Faq />
      <CTA />
    </>
  );
}

export default Home;