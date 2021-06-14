import React, { useContext } from 'react';
import Header from './Components/Header/Header';
import NotesList from './Components/Notes/NotesList';
import NewOrEditNote from './Components/Notes/NewOrEditNote';
import NoteContext from './store/note-context';

const App = () => {
  const ctx = useContext(NoteContext);
  const editingNote = ctx.currentEditNote;

  return (
    <>
      {ctx.newNote && <NewOrEditNote />}
      {ctx.editingNote && <NewOrEditNote id={editingNote.id} />}
      <Header />
      <NotesList />
    </>
  );
}

export default App;
