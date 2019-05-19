import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <MainContainer />
      </div>
    </Router>
  );
}

export default App;
