import React from 'react';
import { __ } from '@eventespresso/i18n';

import { IconButton } from '@eventespresso/ui-components';
import { Edit as EditIcon } from '@eventespresso/icons';
import { useDisclosure } from '@eventespresso/hooks';
import { Container as FormContainer } from '../multiStep';
import { BaseProps } from '../types';

import './style.scss';

const Edit: React.FC<BaseProps> = ({ ticket }) => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<IconButton
				borderless
				className='ee-ticket-sidebar__edit-ticket'
				icon={EditIcon}
				onClick={onOpen}
				tooltip={__('edit ticket')}
			/>
			{isOpen && <FormContainer isOpen={true} onClose={onClose} entity={ticket} />}
		</>
	);
};

export default Edit;
