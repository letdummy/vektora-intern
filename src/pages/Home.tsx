import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClientLogos from "../components/ClientLogos";
import Service from "../components/Service";

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <ClientLogos />
            <Service />
        </div>
    );
}

export default Home;