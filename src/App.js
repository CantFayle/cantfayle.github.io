import React, { useState } from 'react';
import './App.css';
import qrSquare from './qr-square.png';
import { DarkModeToggle } from './DarkModeToggle';
import Experience from './Experience';

const navItems = [
  {
    title: 'Home',
    content: () => `
      An experienced software developer with a proven track record of delivery.
      \n
      Comfortable standing up to share my opinion, and an advocate for personal growth and positive change.
      \n
      Under all that, a person who just loves a puzzle.
    `
  },
  {
    title: 'Experience',
    content: () => 
      <Experience/>
  },
  {
    title: 'Contact',
    content: () =>
      <div className="contact">
        <a href="https://github.com/CantFayle">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/conor-fayle-6731ba130/">
         LinkedIn
        </a>
        <img src={qrSquare} className="qr" alt={"QR"}/>
      </div>
  },
];

function App() {
  const getNav = navTitle => navItems.find(({ title }) => title === navTitle);
  const [selectedNav, setSelectedNav] = useState(getNav('Home'));
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
            <div className="navigation">
              {navItems.map(navItem => {
                const isSelected = navItem.title === selectedNav.title;
                return (
                  <div
                    className={`nav-item ${isSelected ? 'nav-item-selected' : ''}`}
                    onClick={() => setSelectedNav(navItem)}
                  >
                    {isSelected ? '⦿' : navItem.title}
                  </div>
                );
              })}
            </div>
            <div className="section">
              {selectedNav.content()}
            </div>
          </div>
        </div>
      </div>
      <DarkModeToggle/>
    </div>
  );
}

export default App;
