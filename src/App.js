import React from 'react';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header /> {/*STRG + Spacebar auto imports*/}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
