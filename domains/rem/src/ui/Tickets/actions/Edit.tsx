import React from 'react';
import { __ } from '@eventespresso/i18n';

import { IconButton } from '@eventespresso/components';
import { Edit as EditIcon } from '@eventespresso/icons';
import { useDisclosure } from '@chakra-ui/hooks';
import { Container as FormContainer } from '../multiStep';
import { BaseProps } from '../types';

const Edit: React.FC<BaseProps> = ({ ticket }) => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<IconButton borderless icon={EditIcon} onClick={onOpen} tooltip={__('edit ticket')} />
			{isOpen && <FormContainer isOpen={true} onClose={onClose} entity={ticket} />}
		</>
	);
};

export default Edit;
