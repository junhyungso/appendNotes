import React, { useState } from 'react';

const NoteContext = React.createContext({
    dummyNotes: [],
    newNote: false,
    editingNote: false,
    editingId: '',
    updateEditingId: () => {},
    currentEditNote: {},
    finishedSwap: false,
    setFinishedSwap: ()=> {},
    
    showNewNote: () => {},
    hideNewNote: () => {},

    showEditingNote: () => {},
    hideEditingNote: () => {},
    currentlyEditingNote: () => {},

    addNewNote: () => {},
    deleteNote: () => {},
    editNote: () => {},
    swappingNotes: {},
    AddingWhileSelected: false,
    setAddingWhileSelected: () => {},

    noteId: 1,
    setNoteId: () => {},
    titleInput: '',
    setTitleInput: () => {},
    textInput: '',
    setTextInput: () => {},
    noteSubmit: () => {},
    noteTitleChange: () => {},
    noteTextChange: () => {}
})

export const NoteContextProvider = (props) => {
	const [dummyNotes, setDummyNotes] = useState([
		{
			id: '0',
			title: 'New Note',
			text: 'Add a New Note to Begin!'
		},
        {
			id: '1',
			title: 'Nesfsfsfsfe',
			text: 'Adsfsfsf Begin!'
		}
	]);
    const [newNoteIsShown, setNewNoteIsShown] = useState(false);
    const [EditingNoteIsShown, setEditingNoteIsShown] = useState(false);
    const [editingId, setEditingId] = useState('');
    const [currentEditingObject, setCurrentEditingObject] = useState({id: '', title: '', text: ''});
    const [AddingWhileSelected, setAddingWhileSelected] = useState(false);
/****************************************** */
    const [noteId, setNoteId] = useState(2);
    const [titleInput, setTitleInput] = useState('');
    const [textInput, setTextInput] = useState('');

    let swappingNotes = [];
    const [finishedSwap, setFinishedSwap] = useState(false);

    const showNewNoteHandler = () => {
        if (swappingNotes.length > 0) {
            setAddingWhileSelected(!AddingWhileSelected);
        }
        setNewNoteIsShown(true);
      }
    
    const hideNewNoteHandler = () => {
        setNewNoteIsShown(false);
        setTitleInput('');
        setTextInput('');
    }

    const showEditingNoteHandler = () => {
        setEditingNoteIsShown(true);
    }
    
    const hideEditingNoteHandler = () => {
        setEditingNoteIsShown(false);
        setTitleInput('');
        setTextInput('');
    }

    const currentEditingObjectHandler = (props) => {
        setCurrentEditingObject(props)
    }
    const addNewNoteHandler = (newNote) => {
        const updatedNotes = newNote.concat(dummyNotes);
        setDummyNotes(updatedNotes);
    };

    const deleteNoteHandler = (id) => {
        const newNotes = dummyNotes.filter((note) => (note.id !== id));
    setDummyNotes(newNotes);
    };

    const editNoteHandler = (editedNote) => {
        const updatedNotes = dummyNotes.map((elem) => 
           editedNote.id === elem.id ? editedNote : elem
        );
        setEditingId('')
        setDummyNotes(updatedNotes);
    }

    const idHandler = () => setNoteId(noteId+1);

    const submitHandler = (event) => {
        event.preventDefault();

        if (textInput.trim().length > 0){

            if (newNoteIsShown) {
                idHandler();

                const addingNote = {
                    id: noteId.toString(),
                    title: titleInput,
                    text: textInput
                }
                addNewNoteHandler([addingNote])
                hideNewNoteHandler();
            } else if (EditingNoteIsShown) {
                
                const addingNote = {
                    id: editingId,
                    title: titleInput,
                    text: textInput
                }

                editNoteHandler(addingNote);
                hideEditingNoteHandler();
            }
            setTitleInput('');
            setTextInput('');
        } 

    }
    const titleChangeHandler = (event) => {
        setTitleInput(event.target.value);
    }
    const textChangeHandler = (event) => {
        if (event.target.value.length <= 255) {
            setTextInput(event.target.value);
        } 
    }
    const swapHandler = () => {
        let tempId = swappingNotes[0].id;
        swappingNotes[0].id = swappingNotes[1].id;
        swappingNotes[1].id = tempId;
        const updatedNotes = dummyNotes.map((elem) => 
            swappingNotes[0].id === elem.id ? 
            swappingNotes[0] : 
            swappingNotes[1].id === elem.id ? 
            swappingNotes[1] : 
            elem
        );
        setDummyNotes(updatedNotes);
        setFinishedSwap(true); //neveer sets it to false
        swappingNotes=[];
    }

    return (
        <NoteContext.Provider value={{
            dummyNotes: dummyNotes,
            newNote: newNoteIsShown,
            editingNote: EditingNoteIsShown,
            editingId: editingId,
            updateEditingId: setEditingId,
            currentEditNote: currentEditingObject,
            finishedSwap: finishedSwap,
            setFinishedSwap: setFinishedSwap,

            showNewNote: showNewNoteHandler,
            hideNewNote: hideNewNoteHandler,

            showEditingNote: showEditingNoteHandler,
            hideEditingNote: hideEditingNoteHandler,
            currentlyEditingNote: currentEditingObjectHandler,

            addNewNote: addNewNoteHandler,
            deleteNote: deleteNoteHandler,
            editNote: editNoteHandler,
            swappingNotes: swappingNotes,
            AddingWhileSelected: AddingWhileSelected,
            setAddingWhileSelected: setAddingWhileSelected,

            noteId: noteId,
            setNoteId: setNoteId,
            titleInput: titleInput,
            setTitleInput: setTitleInput,
            textInput: textInput,
            setTextInput: setTextInput,
            noteSubmit: submitHandler,
            noteTitleChange: titleChangeHandler,
            noteTextChange: textChangeHandler,
            handleSwap: swapHandler
        }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteContext;