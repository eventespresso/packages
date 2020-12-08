import { CloseOutlined, MinusOutlined, Ticket } from '@eventespresso/icons';

import type { AssignmentStatus } from '../../../types';

import './styles.scss';

const getRelationIcon = (status?: AssignmentStatus): React.ComponentType => {
	switch (status) {
		case 'NEW':
		case 'OLD':
			return Ticket;
		case 'REMOVED':
			return CloseOutlined;
		default:
			return MinusOutlined;
	}
};

export default getRelationIcon;
