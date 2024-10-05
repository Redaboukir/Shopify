import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import './App.css';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('home');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'home':
        return <Home />;
     
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Sidebar onSelect={ setSelectedComponent} />
      <div className="main-content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default App;
