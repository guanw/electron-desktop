import { useContext, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { AppContext } from '../stateManager/store';

const NoteEditor = () => {
  const { dispatch } = useContext(AppContext);
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
        <button
          onClick={() => {
            dispatch({ type: 'CREATE', payload: { body: markdown } });
          }}
          type="button"
        >
          Create
        </button>
      </div>
      <div style={{ flex: 1, padding: '1rem', alignItems: 'stretch' }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default NoteEditor;
