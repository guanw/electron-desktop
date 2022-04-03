/* eslint-disable no-case-declarations */
import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

type InitialStateType = {
  notes: NoteType[];
};

type NoteType = {
  id: string;
  body: string;
  // createdAt: number;
  // updatedAt: number;
};

const INITIAL_VALUE = {
  notes: [] as NoteType[],
};

type Action =
  | { type: 'CREATE'; payload: { body: string } }
  | { type: 'DELETE'; payload: { id: string } };

const NoteReducer = (state = INITIAL_VALUE, action: Action) => {
  switch (action.type) {
    case 'CREATE':
      const notesClone = [...state.notes];
      notesClone.push({
        id: uuidv4(),
        body: action.payload.body,
      });
      return {
        notes: notesClone,
      };
    case 'DELETE':
      const notes = [...state.notes];
      const notesClone2 = notes.filter((note) => {
        return note.id !== action.payload.id;
      });
      return {
        notes: notesClone2,
      };
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: INITIAL_VALUE,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(NoteReducer, INITIAL_VALUE);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
