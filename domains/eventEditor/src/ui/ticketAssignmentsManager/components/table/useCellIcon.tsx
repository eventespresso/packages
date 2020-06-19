import React, { useCallback } from 'react';

import { AssignmentFnArgs } from '../../types';
import { CloseOutlined, MinusOutlined, Ticket } from '@eventespresso/icons';
import { useDataState } from '../../data';

type Callback = (args: AssignmentFnArgs) => React.ComponentType;

const useCellIcon = (): Callback => {
	const { getAssignmentStatus } = useDataState();

	return useCallback<Callback>(
		({ datetimeId, ticketId }) => {
			const status = getAssignmentStatus({ datetimeId, ticketId });
			switch (status) {
				case 'NEW':
				case 'OLD':
					return () => <Ticket fill='white' />;
				case 'REMOVED':
					return () => <CloseOutlined fill='white' />;
				default:
					return () => <MinusOutlined />;
			}
		},
		[getAssignmentStatus]
	);
};

export default useCellIcon;
