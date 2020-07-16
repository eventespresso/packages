import React from 'react';
import { __ } from '@wordpress/i18n';
import { useDisclosure } from '@chakra-ui/core';

import { Button, ButtonSize } from '@eventespresso/components';
import { Calendar } from '@eventespresso/icons';
import { Container as FormContainer } from '@edtrUI/datetimes/dateForm/multiStep';

const AddSingleDate: React.FC = () => {
	const { isOpen, onClose, onOpen: onAddNew } = useDisclosure();
	return (
		<>
			<Button
				buttonSize={ButtonSize.BIG}
				buttonText={__('Add New Date')}
				icon={Calendar}
				mr={2}
				onClick={onAddNew}
			/>
			{isOpen && <FormContainer isOpen={true} onClose={onClose} />}
		</>
	);
};

export default AddSingleDate;
