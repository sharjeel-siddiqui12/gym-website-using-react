import HeroPages from "../components/hero-pages/HeroPages";
import ContactForm from "../components/contact-page/ContactForm";
import Map from "../components/contact-page/Map";

function Contact() {
  return (
    <main>
      <HeroPages page="Contact" />

      <ContactForm />

      <Map />
    </main>
  );
}

export default Contact;
