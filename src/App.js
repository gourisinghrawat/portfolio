import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import DeveloperPage from "./pages/developer";
import EditorPage from "./pages/editor";
import DesignerPage from "./pages/designer";
import "./App.css";

const colorSchemes = {
    developer: {
        light: "#C1E5C8",
        secondary: "#203C28",
        backgroundAndText: "#1C241D",
    },
    editor: {
        light: "#D3FFF3",
        secondary: "#2A3545",
        backgroundAndText: "#07091F",
    },
    designer: {
        light: "#F2F0D3",
        secondary: "#666048",
        backgroundAndText: "#18120E",
    },
};

const applyColorScheme = (scheme) => {
    const root = document.documentElement;
    root.style.setProperty("--light", scheme.light);
    root.style.setProperty("--secondary", scheme.secondary);
    root.style.setProperty("--background-and-text", scheme.backgroundAndText);
};

const ThemeManager = () => {
    const location = useLocation();
    useEffect(() => {
        const path = location.pathname.slice(1) || "developer"; // Default to "developer"
        const scheme = colorSchemes[path] || colorSchemes.developer;
        applyColorScheme(scheme);
    }, [location]);

    return null; // No UI rendering, only applies theme changes
};

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulate a loading screen delay
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 500); // 1-second delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <ThemeManager />
            <div className="container">
                <header className={`header ${isLoaded ? "visible" : ""}`}>
                    <h2>Gouri Singh Rawat</h2>
                    <Navigation />
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<DeveloperPage />} />
                        <Route path="/editor" element={<EditorPage />} />
                        <Route path="/designer" element={<DesignerPage />} />
                    </Routes>
                </main>

                <div className="box contact">
                    <h2>Contact Me</h2>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/gouri-singh-rawat/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/gourisinghrawat" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="mailto:gourisinghrawat03@gmail.com" target="_blank" rel="noreferrer">Google</a>
                    </div>
                </div>
            </div>
        </Router>
    );
}

const Navigation = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <nav className="nav">
            <button className="nav-link" onClick={() => handleNavigation("/")}>Developer</button>
            <button className="nav-link" onClick={() => handleNavigation("/editor")}>Editor</button>
            <button className="nav-link" onClick={() => handleNavigation("/designer")}>Designer</button>
        </nav>
    );
};

export default App;
