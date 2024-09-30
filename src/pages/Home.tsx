import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClientLogos from "../components/ClientLogos";
import Service from "../components/Service";
import Work from "../components/Work";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <ClientLogos />
            <Service />
            <Work />
        </>
    );
}

export default Home;