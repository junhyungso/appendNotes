import React  from 'react';
import Modal from '../../UI/Modal';
import NewOrEditForm from './NewOrEditForm';

const NewNote = (props) => {

	return (
        <Modal>
            <NewOrEditForm id={props.id}/>
        </Modal>
	);
};

export default NewNote;