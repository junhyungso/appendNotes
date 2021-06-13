import React, { useContext } from 'react';
import Note from './Note';

import NoteContext from '../../store/note-context';

import css from './NotesList.module.css';

const NoteList = () => {

	const ctx = useContext(NoteContext);

	const notesList = ctx.dummyNotes.map((note)=> (
		<Note 
			id={note.id} 
			key={note.id} 
			title={note.title} 
			text={note.text}
		/>
	));

	return(
		<>
			<p className={css.tips}>* Click the Add Note button to create a new note. Click two notes to swap them! *</p>
			<div className={css.NotesList}>
				{notesList}
			</div>
		</>
		);
};

export default NoteList;