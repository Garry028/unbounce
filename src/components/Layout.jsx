import AboutUs from "./AboutUs"
import Benefits from "./Benifits"
import Features from "./Features"
import LandingPage from "./LandingPage"
import Reviews from "./Reviews"

const Layout = () => {
    return (
        <div className="">
            <LandingPage />
            {/* below sections */}
            <Benefits />
            <Reviews/>
            <Features/>
            <AboutUs/>
        </div>
    )
}

export default Layout