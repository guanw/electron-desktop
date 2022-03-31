import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Hello = () => {
  return (
    <div>
      <span>Home</span>
      <Link to="/about">To About</Link>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <span>About</span>
      <Link to="/">To Home</Link>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
