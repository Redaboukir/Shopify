import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Whoweare from './components/Who-we-are/Whoweare';
import Contact from './components/Contact/Contact';
import './App.css';

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState('home');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'home':
        return <Home />;
      case 'Whoweare':
        return <Whoweare />;
      case 'contact':
        return <Contact />;
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
