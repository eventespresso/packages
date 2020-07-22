import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { IconButton } from '@eventespresso/components';
import { Trash as TrashIcon } from '@eventespresso/icons';
import { BaseProps } from '../types';
import { useFormState } from '../../../data';

const Trash: React.FC<BaseProps> = ({ ticket }) => {
	const { deleteTicket } = useFormState();
	const onClick = useCallback(() => deleteTicket(ticket?.id), [deleteTicket, ticket?.id]);
	return (
		<>
			<IconButton borderless icon={TrashIcon} onClick={onClick} tooltip={__('trash ticket')} />
		</>
	);
};

export default Trash;
