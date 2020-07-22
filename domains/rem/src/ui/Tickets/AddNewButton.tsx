import React from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/hooks';

import { Button } from '@eventespresso/components';
import { Plus } from '@eventespresso/icons';
import { Container as FormContainer } from './multiStep';

const AddNewButton: React.FC = () => {
	const { isOpen, onClose, onOpen: onAddNew } = useDisclosure();

	return (
		<div className='rem-tickets__add-new'>
			<p>{__('Or')}</p>
			<p>{__('Add ticket details manually')}</p>
			<Button buttonText={__('Add New')} className='rem-tickets__form-btn' icon={Plus} onClick={onAddNew} />
			{isOpen && <FormContainer isOpen={true} onClose={onClose} />}
		</div>
	);
};

export default AddNewButton;
