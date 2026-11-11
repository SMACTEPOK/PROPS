import Lab4Page from './pages/Lab4Page';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__brand">
          <span className="app__brand-mark">✱</span>
          CRAFTMARKET
          <span className="app__brand-tag">LAB 4</span>
        </div>
        <nav className="app__nav">
          <a href="#catalog" className="app__nav-link app__nav-link--active">Композиція</a>
        </nav>
      </header>
      <main className="app__main">
        <Lab4Page />
      </main>
      <footer className="app__footer">
        <p>© 2026 CRAFTMARKET · Лабораторна робота 4</p>
      </footer>
    </div>
  );
}

export default App;
