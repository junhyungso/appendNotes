import React, { useContext } from 'react';
import NoteContext from '../../store/note-context';

import css from './Header.module.css';

const Header = () => {

	const ctx = useContext(NoteContext);
	return (
		<header className={css.header}>
			<h2>AppendNotes</h2>
			<button className={css.button} onClick={ctx.showNewNote}>Add Note</button>
		</header>

	);
};

export default Header;