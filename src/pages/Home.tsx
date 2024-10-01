import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClientLogos from "../components/ClientLogos";
import Service from "../components/Service";
import Work from "../components/Work";
import Support from "../components/Support";
import Testimonial from "../components/Testimonial";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <ClientLogos />
            <Service />
            <Work />
            <Support />
            <Testimonial />
            <Subscription />
            <Footer />
        </>
    );
}

export default Home;