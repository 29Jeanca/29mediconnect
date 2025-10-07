import ContactFormLanding from "./ContactForm";
import '../styles/Contact.css'
import ContactDetailsLanding from "./ContactDetails";

const ContactInfoLanding = () =>{
    return(
        <>
            <div className="contact-info-landing">
                <h3>Pongase en contacto</h3>
                <p>Nos encantaria saber de usted. Por favor rellene este formulario y nos pondremos en contacto 
                    con usted en breve
                </p>
                <section>
                    <ContactFormLanding/>
                </section>
            </div>
        </>
    )

}
export default ContactInfoLanding;