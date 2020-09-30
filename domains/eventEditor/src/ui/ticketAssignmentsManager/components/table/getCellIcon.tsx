import React from 'react';

import { AssignmentStatus } from '../../types';
import { CloseOutlined, MinusOutlined, Ticket } from '@eventespresso/icons';

const getCellIcon = (status: AssignmentStatus): React.ComponentType => {
	switch (status) {
		case 'NEW':
		case 'OLD':
			return () => <Ticket fill='white' />;
		case 'REMOVED':
			return () => <CloseOutlined fill='white' />;
		default:
			return () => <MinusOutlined />;
	}
};

export default getCellIcon;
