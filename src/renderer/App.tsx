import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './App.css';

const About = () => {
  return (
    <div>
      <Link to="/">To Home</Link>
    </div>
  );
};

const NoteEditor = () => {
  const [markdown, setMarkdown] = useState(
    `# Markdown in react-native is so cool!`
  );

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, padding: '1rem', alignItems: 'stretch' }}>
        <textarea
          style={{ width: '100%', maxWidth: '100%', height: '90%' }}
          onChange={(event) => {
            setMarkdown(event.target.value);
          }}
          value={markdown}
        />
      </div>
      <div style={{ flex: 1, padding: '1rem', alignItems: 'stretch' }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NoteEditor />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
