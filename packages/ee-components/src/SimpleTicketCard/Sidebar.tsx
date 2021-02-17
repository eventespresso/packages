import { useCallback } from 'react';

import { Edit, Trash } from './actions';
import { SimpleTicketCardProps } from './types';

const Sidebar: React.FC<SimpleTicketCardProps> = ({
	deleteButtonProps,
	editButtonProps,
	entity: ticket,
	onEdit,
	onDelete,
}) => {
	const onClickEdit = useCallback(() => {
		onEdit(ticket);
	}, [onEdit, ticket]);

	const onClickTrash = useCallback(() => {
		onDelete(ticket);
	}, [onDelete, ticket]);

	return (
		<div className='ee-ticket-sidebar'>
			<Edit {...editButtonProps} onClick={onClickEdit} />
			<Trash {...deleteButtonProps} onClick={onClickTrash} />
		</div>
	);
};

export default Sidebar;
