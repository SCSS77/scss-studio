import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import FadeTransition from "./components/FadeTransition";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Header />
                <main className="main">
                    <div className="container">
                        <FadeTransition>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/services" element={<Services />} />
                                <Route path="/portfolio" element={<Portfolio />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </FadeTransition>
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
