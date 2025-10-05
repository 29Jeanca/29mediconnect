import LandingFooter from "../components/Footer"
import LandingHeader from "../components/Header"
import HeroLanding from "../components/Hero"
import InfoLanding from "../components/Info"

const LandingPage = () => {
    return(
        <>
            <header>
                <LandingHeader/>
            </header>
            <main style={{marginTop: '50px'}}>
                <HeroLanding/>

                <div>
                    <InfoLanding/>
                </div>
            </main>

            <footer>
                <LandingFooter/>
            </footer>
        </>
    )
}
export default LandingPage