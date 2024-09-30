import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClientLogos from "../components/ClientLogos";
import Service from "../components/Service";
import Work from "../components/Work";
import Support from "../components/Support";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <ClientLogos />
            <Service />
            <Work />
            <Support />
        </>
    );
}

export default Home;