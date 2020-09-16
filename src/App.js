import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
