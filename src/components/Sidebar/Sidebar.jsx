import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelect }) => {
  return (
    <aside className="sidebar">
      <nav className="nav">
        <ul>
          <li onClick={() => onSelect('home')}>Welcome</li>
          <li onClick={() => onSelect('Whoweare')}>Who We Are</li>
          <li onClick={() => onSelect('what-we-do')}>What We Do</li>
          <li onClick={() => onSelect('contact')}>Get In Touch</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
