import { Routes, Route, Link } from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { FavoritesPage } from './pages/FavoritesPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">New jokes</Link>
        <Link to="/favs">Favorites jokes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="favs" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
