import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Proposal from './components/Proposal';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AudioManager from './components/AudioManager';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-soft-pink via-soft-lavender to-warm-rose">
        <Navigation />
        <AudioManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/proposal" element={<Proposal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

