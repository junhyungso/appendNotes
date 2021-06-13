import React, { useEffect, useContext } from 'react';
import NoteContext from '../../store/note-context';
import css from './NewOrEditForm.module.css';

const NewOrEditForm = props => {
    const ctx = useContext(NoteContext);

    useEffect(() =>{
        ctx.updateEditingId(props.id);
    }, [ctx, props.id])

    return (
        <>
            <form className={css.form} onSubmit={ctx.noteSubmit} id="noteForm">
            <label>Title:    </label>
            <input type="text" 
                value={ctx.titleInput} 
                onChange={ctx.noteTitleChange}
            />
            <br />
            <textarea 
                placeholder={!ctx.editingNote ? 'Enter a note... (upto 255 characters)' : null }
                value={ctx.textInput} 
                onChange={ctx.noteTextChange}
            />
        </form>
        <div className={css.buttons}>
            <button className={css.button} onClick={ctx.editingNote ? ctx.hideEditingNote : ctx.hideNewNote}>Close</button>
            <button className={css.button} type="submit" value="submit" form="noteForm">Add</button>
        </div>

    </>
    );
};
export default NewOrEditForm;