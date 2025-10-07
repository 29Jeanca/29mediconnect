import ContactDetailsLanding from "../components/ContactDetails";
import ContactInfoLanding from "../components/ContactInfo";
import LandingFooter from "../components/Footer";
import LandingHeader from "../components/Header";
import "../styles/Contact.css";

const ContactLandingPage = () => {
  return (
    <>
      <header>
        <LandingHeader />
      </header>

      <main className="main-contact-landing">
        <div>
          <ContactInfoLanding />
        </div>
        <div className="contact-details-landing">
            <ContactDetailsLanding/>
        </div>
      </main>

      <footer>
        <LandingFooter />
      </footer>
    </>
  );
};
export default ContactLandingPage;
