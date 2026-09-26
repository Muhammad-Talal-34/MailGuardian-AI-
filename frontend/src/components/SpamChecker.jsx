import { useState } from 'react';
import { predictSpam } from '../services/api';
import {
  ShieldCheck, AlertTriangle, ScanLine,
  Cpu, Server, Activity, ChevronRight, Fingerprint
} from 'lucide-react';
import './SpamChecker.css'

export default function SpamChecker() {
  const [emailText, setEmailText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!emailText.trim()) {
      setError("Payload missing. Please paste text first.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await predictSpam(emailText);
      setTimeout(() => {
        setResult(data.prediction);
        setLoading(false);
      }, 1500); // Artificial delay for cool scanning animation
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="cyber-wrapper">

      {/* Animated Header */}
      <header className="cyber-header slide-down">
        <div className="icon-box pulse-glow">
          <Fingerprint size={32} className="text-cyan" />
        </div>
        <div className="header-text">
          <h1>Threat Intelligence V2</h1>
          <p>Advanced NLP payload inspection & classification</p>
        </div>
      </header>

      <div className="dashboard-grid">

        {/* LEFT COLUMN: Main Scanner Card */}
        <div className="glass-card main-scanner fade-in-up">
          <div className="card-heading">
            <ScanLine size={20} />
            <span>Target Payload Analysis</span>
          </div>

          <form onSubmit={handleCheck} className="scanner-form">
            <div className="input-wrapper">
              {loading && <div className="scanning-laser"></div>}
              <textarea
                rows="8"
                placeholder="Initialize scan by pasting email content here..."
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
                disabled={loading}
              />
            </div>

            <button type="submit" className={`cyber-btn ${loading ? 'loading' : ''}`} disabled={loading || !emailText.trim()}>
              {loading ? (
                <>
                  <Activity className="spinner" size={18} />
                  <span>Processing Neural Network...</span>
                </>
              ) : (
                <>
                  <span>Initiate AI Scan</span>
                  <ChevronRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Results Area */}
          {error && <div className="cyber-alert error slide-in-right">{error}</div>}

          {result && (
            <div className={`cyber-result-card slide-in-right ${result === 'Legitimate (Ham)' ? 'safe' : 'risk'}`}>
              <div className="result-icon">
                {result === 'Legitimate (Ham)' ? <ShieldCheck size={40} /> : <AlertTriangle size={40} />}
              </div>
              <div className="result-content">
                <h3>{result === 'Legitimate (Ham)' ? 'Payload Verified: Clean' : 'Malicious Threat Detected'}</h3>
                <p>
                  {result === 'Legitimate (Ham)'
                    ? 'No malicious signatures found. NLP model confirms the structural integrity of this message.'
                    : 'CRITICAL: High probability of phishing or unauthorized spam. Immediate quarantine recommended.'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Info Cards */}
        <div className="side-cards fade-in-left">

          <div className="glass-card mini-card">
            <div className="card-heading"><Cpu size={18} /><span>Engine Status</span></div>
            <div className="mini-card-content">
              <h2>Online</h2>
              <p>SVM Model Active</p>
              <div className="status-dot green pulse"></div>
            </div>
          </div>

          <div className="glass-card mini-card delay-1">
            <div className="card-heading"><Server size={18} /><span>Database Routing</span></div>
            <div className="mini-card-content">
              <h2>Enron Core</h2>
              <p>33,716 Vectors Loaded</p>
              <div className="status-dot blue"></div>
            </div>
          </div>

          <div className="glass-card mini-card delay-2">
            <div className="card-heading"><Activity size={18} /><span>System Accuracy</span></div>
            <div className="mini-card-content">
              <h2>98.29%</h2>
              <p>F1-Score Confidence</p>
            </div>
            {/* Simple Animated Progress Bar */}
            <div className="progress-bg mt-2">
              <div className="progress-fill"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}