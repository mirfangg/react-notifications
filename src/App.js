import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="table">
        <Table />
      </div>
      <Footer />
    </div>
  );
}

export default App;
