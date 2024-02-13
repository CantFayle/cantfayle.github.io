import './App.css';
import Calculator from './Calculator';

function App() {
  const navItems = ['Home', 'Experience', 'Projects', 'Contact'];
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
                <a className="nav-item" href="#">
                  {navItem}
                </a>
              )}
            </div>
            <div className="section">{`
              An experienced software developer with a proven track record of delivery.
              \n
              Comfortable standing up to share my opinion, and an advocate for personal growth and positive change.
              \n
              Under all that, a person who just loves a puzzle.
            `}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
