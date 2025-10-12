import LandingHeader from "../../Landing/components/Header"
import LandingFooter from "../../Landing/components/Footer"
import RegistrationForm from "../components/RegistrationForm"
const Registration = () =>{
    return (
        <>
        <header>
            <LandingHeader/>
        </header>
        <main>
            <RegistrationForm/>
        </main>
        <footer>
            <LandingFooter/>
        </footer>
        </>
    )
}
export default Registration