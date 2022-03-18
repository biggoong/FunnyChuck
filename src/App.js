import { MainPage } from './pages/MainPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <li>
          <ul>New jokes</ul>
          <ul>Favorites jokes</ul>
        </li>
      </nav>
      <MainPage />
    </div>
  );
}

export default App;
