import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DeveloperPage from "./pages/developer";
import EditorPage from "./pages/editor";
import DesignerPage from "./pages/designer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Gouri Singh Rawat</h1>
          <nav className="nav">
            <Link to="/" className="nav-link">Developer</Link>
            <Link to="/editor" className="nav-link">Editor</Link>
            <Link to="/designer" className="nav-link">designer</Link>
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
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:gouri@gmail.com" target="_blank" rel="noreferrer">
            Google
          </a>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
