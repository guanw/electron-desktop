import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import NoteEditor from '../components/NoteEditor';
import NotesList from '../components/NotesList';
import { AppProvider } from '../stateManager/store';
import 'react-pro-sidebar/dist/css/styles.css';
import './App.css';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <div style={{ display: 'flex', height: '100vh' }}>
          <div style={{ flex: 1 }}>
            <ProSidebar>
              <Menu iconShape="square">
                <MenuItem>
                  New Note
                  <Link to="/Newnote" />
                </MenuItem>
                <MenuItem>
                  About
                  <Link to="/About" />
                </MenuItem>
              </Menu>
            </ProSidebar>
          </div>
          <div style={{ flex: 5 }}>
            <Routes>
              <Route path="/Newnote" element={<NoteEditor />} />
              <Route path="/about" element={<NotesList />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}
