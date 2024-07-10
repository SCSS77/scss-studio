import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import FadeTransition from './components/FadeTransition';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ProjectDetailPage from './pages/ProjectDetail';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const AppContent: React.FC = () => {
    const location = useLocation();

    const getMainClassName = () => {
        if (location.pathname.startsWith('/project/')) {
            return 'main project-detail-page';
        }

        switch (location.pathname) {
            case '/services':
                return 'main services-page';
            case '/portfolio':
                return 'main portfolio-page';
            case '/contact':
                return 'main contact-page';
            default:
                return 'main';
        }
    };

    return (
        <main className={getMainClassName()}>
            <div className="container">
                <FadeTransition>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/project/:projectId" element={<ProjectDetailPage />} />
                    </Routes>
                </FadeTransition>
            </div>
        </main>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Header />
                <AppContent />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
