import { useCallback, useMemo } from 'react';

import { Button } from '@eventespresso/adapters';
import { __ } from '@eventespresso/i18n';
import { useDataState } from '../../data';
import getRelationIcon from './getRelationIcon';
import type { RenderCellProps } from '../../types';

const BodyCell: React.FC<RenderCellProps> = ({ datetime, ticket }) => {
	const { getAssignmentStatus, toggleAssignment } = useDataState();

	const status = getAssignmentStatus({ datetimeId: datetime.id, ticketId: ticket.id });

	const onClick = useCallback(() => toggleAssignment({ datetimeId: datetime.id, ticketId: ticket.id }), [
		datetime.id,
		ticket.id,
		toggleAssignment,
	]);

	const icon = useMemo(() => getRelationIcon(status), [status]);

	return (
		<Button
			aria-label={status || __('assign ticket')}
			className='ee-tam-relation-btn'
			icon={icon}
			margin='auto'
			onClick={onClick}
			variant='link'
		/>
	);
};

export default BodyCell;
