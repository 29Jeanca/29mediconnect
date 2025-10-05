import CardServicesInfo from "../components/CardServices";
import LandingFooter from "../components/Footer";
import LandingHeader from "../components/Header";
import ServicesInfoLanding from "../components/ServicesInfo";
import '../styles/Services.css'
const ServicesLandingPage = () => { 

    return(
        <>
            <header>
                <LandingHeader/>
            </header>
            <main>
             <ServicesInfoLanding/>
            </main>

            <footer>
                <LandingFooter/>
            </footer>
        </>
    )
}
export default ServicesLandingPage;