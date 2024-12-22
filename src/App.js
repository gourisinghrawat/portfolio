import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
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
    return (
        <Router>
            <ThemeManager />
            <div className="container">
                <header className="header">
                    <h1>Gouri Singh Rawat</h1>
                    <nav className="nav">
                        <Link to="/" className="nav-link">Developer</Link>
                        <Link to="/editor" className="nav-link">Editor</Link>
                        <Link to="/designer" className="nav-link">Designer</Link>
                    </nav>
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
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="mailto:gouri@gmail.com" target="_blank" rel="noreferrer">Google</a>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
