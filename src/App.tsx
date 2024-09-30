import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';

function App() {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <>
            <Home />
        </>
    );
}

export default App;