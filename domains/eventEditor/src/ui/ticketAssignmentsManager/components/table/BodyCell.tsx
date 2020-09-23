import React, { useCallback } from 'react';

import { Button } from '@eventespresso/adapters';
import type { RenderCellProps } from '../../types';
import { useDataState } from '../../data';
import useCellIcon from './useCellIcon';

const BodyCell: React.FC<RenderCellProps> = ({ datetime, ticket }) => {
	const { toggleAssignment } = useDataState();

	const getCellIcon = useCellIcon();

	const onClick = useCallback(() => toggleAssignment({ datetimeId: datetime.id, ticketId: ticket.id }), [
		datetime.id,
		ticket.id,
		toggleAssignment,
	]);

	const icon = getCellIcon({ datetimeId: datetime.id, ticketId: ticket.id });

	return <Button icon={icon} margin='auto' onClick={onClick} variant='link' />;
};

export default BodyCell;
