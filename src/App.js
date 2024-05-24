import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content-container">
        <MainContent />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
