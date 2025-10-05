import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import LandingPage from "../Landing/pages/Landing";
const Routing = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </Router>
    )
}
export default Routing;