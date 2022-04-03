import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../stateManager/store';

const NotesList = () => {
  const { state, dispatch } = useContext(AppContext);
  const listItems = state.notes.map((note) => (
    <li>
      <p>{note.id}</p>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'DELETE', payload: { id: note.id } });
        }}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <ul>{listItems}</ul>
      <Link to="/NewNote">To new note</Link>
    </div>
  );
};

export default NotesList;
