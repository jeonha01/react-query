import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from "./HomePage"
import ReactQueryPage from './ReactQueryPage';


function App() {
  // npx json-server --watch db.json --port 3004
  return (
    <div className="App">
      <nav style={{ backgroundColor: "beige", padding: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Homepage</Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/react-query' element={<ReactQueryPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
