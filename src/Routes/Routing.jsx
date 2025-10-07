import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import LandingPage from "../Landing/pages/Landing";
import ServicesLandingPage from "../Landing/pages/Services";
import DoctorsLandingPage from "../Landing/pages/Doctors";
import ContactLandingPage from "../Landing/pages/Contact";
const Routing = () =>{
    return(
        <Router>
            <Routes>
                {/* LANDING ROUTES*/}
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/servicios" element={<ServicesLandingPage/>}/>
                <Route path="/doctores" element={<DoctorsLandingPage/>}/>
                <Route path="/contacto" element={<ContactLandingPage/>}/>
            </Routes>
        </Router>
    )
}
export default Routing;