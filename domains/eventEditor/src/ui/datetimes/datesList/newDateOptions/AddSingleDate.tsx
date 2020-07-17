import React from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/core';

import { Button, NewEntityOption } from '@eventespresso/components';
import { Calendar } from '@eventespresso/icons';
import { Container as FormContainer } from '@edtrUI/datetimes/dateForm/multiStep';

const AddSingleDate: React.FC = () => {
	const { isOpen, onClose, onOpen: onAddNew } = useDisclosure();
	return (
		<NewEntityOption
			title={__('Single Date')}
			icon={Calendar}
			description={__('Add a single date and assign the tickets to it')}
		>
			<Button buttonText={__('Add Single Date')} onClick={onAddNew} />
			{isOpen && <FormContainer isOpen={true} onClose={onClose} />}
		</NewEntityOption>
	);
};

export default AddSingleDate;
