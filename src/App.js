import React, { useState } from 'react';
import {
  Routes,
  Route,
  Link,
  useLocation,
  matchRoutes,
} from 'react-router-dom';
import { DarkModeToggle } from './DarkModeToggle';
import Home from './Home';
import Experience from './Experience';
import Hangman from './Hangman';
import Contact from './Contact';
import './App.css';

const navItems = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Experience',
    link: '/experience',
  },
  {
    title: 'Play',
    link: '/projects',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];

function App() {
  const location = useLocation();
  return (
    <div className="page">
      <div className="frame">
        <div className="container">
          <div className="name">
            Conor Fayle
          </div>
          <div className="description">
            Software Developer
          </div>
          <div className="content">
            <ul className="navigation">
              {navItems.map(navItem => {
                const isSelected = navItem.link === location.pathname;
                return (
                  <Link
                    className={`nav-item ${isSelected ? 'nav-item-selected' : ''}`}
                    to={navItem.link}
                  >
                    {isSelected ? '⦿' : navItem.title}
                  </Link>
                );
              })}
            </ul>
            <div className="section">
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/experience" element={<Experience />}/>
                <Route path="/projects" element={<Hangman />}/>
                <Route path="/contact" element={<Contact />}/>
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <DarkModeToggle/>
    </div>
  );
}

export default App;
