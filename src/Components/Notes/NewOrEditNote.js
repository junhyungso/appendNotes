import React  from 'react';
import Modal from '../../UI/Modal';
import NewOrEditForm from './NewOrEditForm';

const NewOrEditNote = (props) => {

	return (
        <Modal>
            <NewOrEditForm id={props.id}/>
        </Modal>
	);
};

export default NewOrEditNote;