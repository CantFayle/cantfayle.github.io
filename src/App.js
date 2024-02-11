import './App.css';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Calculator/>
      </header>
    </div>
  );
}

export default App;
