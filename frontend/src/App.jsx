// src/App.jsx
import { BrainCircuit, Activity } from 'lucide-react';
import SpamChecker from './components/SpamChecker';

import './index.css';  // Global base variables
import './App.css';    

//
// 1. Futuristic Navbar Component
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <BrainCircuit size={28} color="var(--cyan)" />
        Mail<span>Guardian</span>
      </div>

      <ul className="nav-links">
        <li><a href="#analysis">Live Scanner</a></li>
        <li><a href="#history">Threat Logs</a></li>
        <li><a href="#about">Engine Config</a></li>
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <Activity size={18} color="var(--neon-green)" />
        <span>System Online</span>
      </div>
    </nav>
  );
}

// 2. Cyberpunk Styled Footer
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 MailGuardian Security Systems. <span>Naïve Bayes NLP Engine v2.0</span>. Active monitoring.</p>
    </footer>
  );
}

// 3. Main Dashboard Application
function App() {
  return (
    <div className="dashboard-wrapper">
      <Navbar />

      <main className="main-content">
        <SpamChecker />
      </main>

      <Footer />
    </div>
  );
}

export default App;