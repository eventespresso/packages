import { useCallback } from 'react';

import { Edit, Trash } from './actions';
import { SimpleTicketCardProps } from './types';

const Sidebar: React.FC<SimpleTicketCardProps> = ({ entity: ticket, onEdit, onDelete }) => {
	const onClickEdit = useCallback(() => {
		onEdit(ticket);
	}, [onEdit, ticket]);

	const onClickTrash = useCallback(() => {
		onDelete(ticket);
	}, [onDelete, ticket]);

	return (
		<div className='ee-ticket-sidebar'>
			<Edit onClick={onClickEdit} />
			<Trash onClick={onClickTrash} />
		</div>
	);
};

export default Sidebar;
