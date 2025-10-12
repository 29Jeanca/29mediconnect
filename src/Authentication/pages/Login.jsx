import LandingFooter from "../../Landing/components/Footer"
import LandingHeader from "../../Landing/components/Header"
import LoginForm from "../components/LoginForm"

const Login = () => {
    return(
        <>
        <header>
            <LandingHeader/>
        </header>
        <main>
            <LoginForm/>
        </main>
        <footer>
            <LandingFooter/>
        </footer>
        </>
    )
}
export default Login