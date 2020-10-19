import React, { useCallback } from 'react';
import { __ } from '@eventespresso/i18n';

import { IconButton } from '@eventespresso/components';
import { Trash as TrashIcon } from '@eventespresso/icons';
import { useFormState } from '../../../data';
import type { BaseProps } from '../types';

const Trash: React.FC<BaseProps> = ({ ticket }) => {
	const { deleteTicket } = useFormState();
	const onClick = useCallback(() => deleteTicket(ticket?.id), [deleteTicket, ticket?.id]);

	return <IconButton borderless icon={TrashIcon} onClick={onClick} tooltip={__('trash ticket')} />;
};

export default Trash;
