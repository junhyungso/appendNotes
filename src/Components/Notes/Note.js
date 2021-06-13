import React, { useState, useEffect, useContext } from 'react';
import NoteContext from '../../store/note-context';

import css from './Note.module.css';

const Note = props => {
	const ctx = useContext(NoteContext);

	const [selected, setIsSelected] = useState(false);
	const noteClass = `${css.note} ${selected ? css.highlightedNote : ''}`;
	
	useEffect(() => {
		if (ctx.finishedSwap) {
			setIsSelected(false);
		}
	},[ctx.finishedSwap, ctx.handleSwap]);
	
	const editingHandler = props => {
		ctx.showEditingNote();
		ctx.currentlyEditingNote(props);
		ctx.setTitleInput(props.title);
		ctx.setTextInput(props.text);
	}

	const selectingHandler = (props) => {

		const currentObject = {
			id: props.id,
			title: props.title,
			text: props.text
		}
		setIsSelected(!selected);
		
		if (ctx.swappingNotes.length < 2) {
			ctx.swappingNotes.push(currentObject);
			if (ctx.swappingNotes.length === 2) {
				ctx.handleSwap();
			}
		}

	}
	return (
		<>
			<li className={noteClass} onClick={()=>selectingHandler(props)} tabIndex="0">
				<h3 className={css.title}> {props.title} </h3>
				<p className={css.text}>	{props.text} </p>
				<div className={css.buttons}>
					<button className={css.button} onClick={() => editingHandler(props)}>Edit</button>
					<button className={css.button} onClick={() => ctx.deleteNote(props.id)}>Delete</button>
				</div>

			</li>
		</>		
	)
};

export default Note;