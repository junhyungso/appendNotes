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
		if (ctx.AddingWhileSelected) {
			setIsSelected(false);
		}
	// ctx.setFinishedSwap(false);
	},[ctx.finishedSwap, ctx.handleSwap, ctx.AddingWhileSelected]);

	const editingHandler = () => {
		ctx.showEditingNote();
		ctx.currentlyEditingNote(props);
		ctx.setTitleInput(props.title);
		ctx.setTextInput(props.text);
	}

	const deleteNoteHandler = (event) => {
		event.stopPropagation();
		ctx.deleteNote(props.id)
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
			<li className={noteClass} onClick={()=>selectingHandler(props)}>
				<h3 className={css.title}> {props.title} </h3>
				<p className={css.text}>	{props.text} </p>
				<div className={css.buttons}>
					<button className={css.button} onClick={editingHandler}>Edit</button>
					<button className={css.button} onClick={deleteNoteHandler}>Delete</button>
				</div>

			</li>
		</>		
	)
};

export default Note;