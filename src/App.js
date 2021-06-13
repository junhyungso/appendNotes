import React, { useContext } from 'react';
import Header from './Components/Header/Header';
import NotesList from './Components/Notes/NotesList';
import NewNote from './Components/Notes/NewNote';
import NoteContext from './store/note-context';

const App = () => {
  const ctx = useContext(NoteContext);

  const editingNote = ctx.currentEditNote;

  return (
    <>
      {ctx.newNote && <NewNote />}
      {ctx.editingNote && <NewNote id={editingNote.id} />}

      <Header />
      <NotesList />
    </>
  );
}

export default App;
