import React, { useState } from 'react';
import './App.css';
import qr from './qr-code.svg';
import Calculator from './Calculator';

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
    content: () => `More to come...`
  },
  {
    title: 'Projects',
    content: () => `More to come...`
  },
  {
    title: 'Contact',
    content: () =>
      <>
        <img src={qr} className="qr" alt={"QR"}/>
      </>
  },
];

function App() {
  const getNav = navTitle => navItems.find(({ title }) => title === navTitle);
  const [selectedNav, setSelectedNav] = useState(getNav('Home'))
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
              {navItems.map(navItem =>
                <div
                  className={`nav-item ${navItem.title === selectedNav.title ? 'nav-item-selected' : ''}`}
                  onClick={() => setSelectedNav(navItem)}
                >
                  {navItem.title}
                </div>
              )}
            </div>
            <div className="section">
              {selectedNav.content()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
