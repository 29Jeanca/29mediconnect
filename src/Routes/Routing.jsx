import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import LandingPage from "../Landing/pages/Landing";
import ServicesLandingPage from "../Landing/pages/Services";
import DoctorsLandingPage from "../Landing/pages/Doctors";
import ContactLandingPage from "../Landing/pages/Contact";
import Login from "../Authentication/pages/Login";
import Registration from "../Authentication/pages/Registration";
const Routing = () =>{
    return(
        <Router>
            <Routes>
                {/* LANDING ROUTES*/}
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/servicios" element={<ServicesLandingPage/>}/>
                <Route path="/doctores" element={<DoctorsLandingPage/>}/>
                <Route path="/contacto" element={<ContactLandingPage/>}/>
                {/* AUTHENTICATION ROUTES */}
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Registration/>}/>
            </Routes>
        </Router>
    )
}
export default Routing;