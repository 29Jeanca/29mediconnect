import DoctorsInfo from "../components/DoctorsInfo";
import LandingFooter from "../components/Footer";
import LandingHeader from "../components/Header";
import '../styles/Doctors.css';
const DoctorsLandingPage = () => {
  return (
    <>
        <header>
            <LandingHeader/>
        </header>

        <main>
            <DoctorsInfo/>
        </main>

        <footer>
            <LandingFooter/>
        </footer>
    </>
  )
}
export default DoctorsLandingPage;